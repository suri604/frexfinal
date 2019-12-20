package com.frex.fitness.service;

import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.ActivityInfo;
import org.json.JSONException;

import java.io.IOException;

public interface ActivityInfoService {
    ActivityInfo getActivityInfoForToday(String userId, String activityType, String date) throws FitInfoDoesNotExistException, RefreshTokenNotFoundException, JSONException, IOException;
}
