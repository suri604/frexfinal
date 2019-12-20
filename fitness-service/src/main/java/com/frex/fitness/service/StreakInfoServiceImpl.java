package com.frex.fitness.service;

import com.frex.fitness.exception.FreakInfoDoesNotExistException;
import com.frex.fitness.model.FrequencyInfo;
import com.frex.fitness.model.StreakInfo;
import com.frex.fitness.repository.StreakInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class StreakInfoServiceImpl implements StreakInfoService {
    private StreakInfoRepository streakInfoRepository;
    private FreakInfoService freakInfoService;

    public StreakInfoServiceImpl(@Autowired StreakInfoRepository streakInfoRepository, @Autowired FreakInfoService freakInfoService) {
        this.streakInfoRepository = streakInfoRepository;
        this.freakInfoService = freakInfoService;
    }

    public String dateFromLDT(LocalDateTime ldt) {
        return ldt.getDayOfMonth() + "/" + ldt.getMonthValue() + "/" + ldt.getYear();
    }

    public StreakInfo getLastStreakDay(String userId, String activityType) throws FreakInfoDoesNotExistException {
        LocalDateTime localDateTime = LocalDateTime.now();
        String date = dateFromLDT(localDateTime);
        String streakInfoId = userId + ":" + activityType + ":" + date;
        int dayOfWeek = localDateTime.getDayOfWeek().getValue();
        int dayOfMonth = LocalDateTime.now().getDayOfMonth();
        FrequencyInfo frequencyInfo = this.freakInfoService.retrieveFreakInfo(userId, activityType).getFrequencyInfo();
        for (int i = dayOfMonth; i > 0; i--) {
            dayOfMonth -= 1;
            dayOfWeek -= 1;
            String streakDay = dateFromLDT(localDateTime.minusDays(dayOfMonth - i));
            if (dayOfWeek == 0) {
                dayOfWeek = 7;
            }
            if (dayOfMonth == 0) {
                return streakInfoRepository.save(new StreakInfo(userId, activityType, streakDay, 1));
            }
            switch (dayOfWeek) {
                case 1: {
                    getStreakInfoForStreakDay();
                    break;
                }
                case 2: {
                }
            }
        }
        return null;
    }

    public StreakInfo getStreakInfoForStreakDay(
//            boolean isStreakDay, FrequencyInfo frequencyInfo, StreakInfo streakInfo
    ) {
//        if (frequencyInfo.isMonday()) {
//            if (streakInfoRepository.findById(streakInfo.getStreakInfoId()).isPresent()) {
//                streakInfo.setStreakCount(streakInfoRepository.findById(streakInfoId).get().getStreakCount() + 1);
//                return streakInfoRepository.save(streakInfo);
//            } else {
//                streakInfo.setStreakCount(1);
//                return streakInfoRepository.save(streakInfo);
//            }
//        } else {
//            continue;
//        }
        return null;
    }

    @Override
    public int getStreakCount(String userId, String activityType) throws FreakInfoDoesNotExistException {
        LocalDateTime localDateTime = LocalDateTime.now();
        return 0;
    }
}
