package com.stackroute.service.fitness;

import com.stackroute.domain.fitness.FitnessPerDay;
import com.stackroute.domain.fitness.FitnessRewards;
import com.stackroute.domain.fitness.TotalFitnessRewards;
import com.stackroute.repository.RewardsPerDayRepo;
import com.stackroute.repository.TotalFitnessRepo;
import com.stackroute.service.perday.PerDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TotalFItnessServiceImpl implements TotalFitnessService {
    @Autowired
    TotalFitnessRepo totalFitnessRepo;
    @Autowired
    PerDayService perDayService;


    @Override
    public void save(FitnessRewards fitnessRewards) {
        TotalFitnessRewards existing = totalFitnessRepo.findTotalFitnessRewardsByUsername(fitnessRewards.getUserId());

        if (existing == null) {
            System.out.println("not existing");
            String activityType = fitnessRewards.getActivityType();
            if (activityType.equals("1") || activityType.equals("2")) {
                TotalFitnessRewards newTotal = new TotalFitnessRewards(fitnessRewards.getUserId(), fitnessRewards.getPoints(), 100);

                totalFitnessRepo.save(newTotal);
                LocalDateTime today = LocalDateTime.now();
                String date = today.getDayOfMonth() + "/" + today.getMonthValue() + "/" + today.getYear() + fitnessRewards.getUserId();

                perDayService.save(date, newTotal.getPoints(), newTotal.getUsername());

            } else {
                TotalFitnessRewards newTotal = new TotalFitnessRewards(fitnessRewards.getUserId(), 10, 100);
                LocalDateTime today = LocalDateTime.now();
                totalFitnessRepo.save(newTotal);
                String date = today.getDayOfMonth() + "/" + today.getMonthValue() + "/" + today.getYear() + fitnessRewards.getUserId();

                perDayService.save(date, newTotal.getPoints(), newTotal.getUsername());

            }
        } else {
            System.out.println("existing existing");
            LocalDateTime localDateTime = LocalDateTime.now();
            localDateTime.minusDays(1);
            String date = localDateTime.getDayOfMonth() + "/" + localDateTime.getMonthValue() + "/" + localDateTime.getYear() + fitnessRewards.getUserId();
            FitnessPerDay lastday = perDayService.findUser(date);
            String activityType = fitnessRewards.getActivityType();
            TotalFitnessRewards newTotal;
            if (lastday == null) {
                System.out.println("last was null");
                int currentData;
                LocalDateTime localDateTime1 = LocalDateTime.now();
                String date1 = localDateTime1.getDayOfMonth() + "/" + localDateTime1.getMonthValue() + "/" + localDateTime1.getYear() + fitnessRewards.getUserId();
                FitnessPerDay current = perDayService.findUser(date1);
                System.out.println(activityType);
                if (activityType.equals("1") || activityType.equals("2")) {
                    int todaysData;
                    if (current == null) {
                        todaysData = fitnessRewards.getPoints() / 50;

                    } else {
                        todaysData = fitnessRewards.getPoints() / 50 + current.getPoints();
                    }
                    perDayService.save(date1, todaysData, existing.getUsername());
                    currentData = fitnessRewards.getPoints() / 50;
                    newTotal = new TotalFitnessRewards(fitnessRewards.getUserId(), currentData+existing.getPoints(), 100);
                    System.out.println("in 1");
                } else {
                    System.out.println("in 2");
                    int todaysData;
                    if (current == null) {
                        todaysData = 10;

                    } else {
                        todaysData = 10 + current.getPoints();
                    }
                    perDayService.save(date1, todaysData, current.getUsername());
                    currentData = 10;
                    newTotal = new TotalFitnessRewards(fitnessRewards.getUserId(), 10, 100);

                }
                totalFitnessRepo.save(newTotal);

            } else {

                LocalDateTime localDateTime1 = LocalDateTime.now();
                String date1 = localDateTime1.getDayOfMonth() + "/" + localDateTime1.getMonthValue() + "/" + localDateTime1.getYear() + fitnessRewards.getUserId();
                FitnessPerDay current = perDayService.findUser(date1);
                int todaysTotal;
                int newData;
                if (activityType.equals("1") || activityType.equals("1")) {
                    todaysTotal = current.getPoints() + fitnessRewards.getPoints() / 50;
                    newData = existing.getPoints()+fitnessRewards.getPoints() / 50;
                } else {
                    todaysTotal = current.getPoints() + 10;
                    newData = existing.getPoints()+10;
                }
                double performance = (todaysTotal - lastday.getPoints()) / lastday.getPoints() * 100;
                newTotal = new TotalFitnessRewards(fitnessRewards.getUserId(), newData, performance);
                perDayService.save(date1,todaysTotal, newTotal.getUsername());

            }


        }
    }

    @Override
    public List<TotalFitnessRewards> getAll() {
        return totalFitnessRepo.findAll();
    }

    @Override
    public List<TotalFitnessRewards> getTop10() {
        return totalFitnessRepo.findAll(new Sort(Sort.Direction.DESC, "points"));
    }
}
