package com.stackroute.service.perday;

import com.stackroute.domain.fitness.FitnessPerDay;
import com.stackroute.domain.fitness.FitnessRewards;
import com.stackroute.domain.fitness.PerdayQuery;
import com.stackroute.repository.RewardsPerDayRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
@Service
public class PerdayServiceImpl implements PerDayService {

    @Autowired
    RewardsPerDayRepo rewardsPerDayRepo;


    @Override
    public void save(String date, int points, String username) {
        FitnessPerDay fitnessPerDay = new FitnessPerDay(date,points,username);
        rewardsPerDayRepo.save(fitnessPerDay);
    }

    @Override
    public List<FitnessPerDay> getAll() {
        return rewardsPerDayRepo.findAll();
    }

    @Override
    public List<FitnessPerDay> getTop10() {
        return rewardsPerDayRepo.findAll(new Sort(Sort.Direction.DESC, "points"));
    }

    @Override
    public FitnessPerDay findUser(String username) {
        return rewardsPerDayRepo.findFitnessPerDaysByDay(username);
    }


}
