package com.frex.fitness.service;

import com.frex.fitness.exception.BasicInfoDoesNotExistException;
import com.frex.fitness.exception.FreakInfoDoesNotExistException;
import com.frex.fitness.model.StreakInfo;

public interface StreakInfoService {
    //retrieve
    int getStreakCount(String userId, String activityType) throws BasicInfoDoesNotExistException, FreakInfoDoesNotExistException;
}
