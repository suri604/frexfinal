package com.frex.fitness.service;

import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.CalorieInfo;
import org.json.JSONException;

import java.io.IOException;

public interface CalorieInfoService {
    CalorieInfo getCalorieInfoForToday(String userId, String date) throws RefreshTokenNotFoundException, FitInfoDoesNotExistException, JSONException, IOException;
}
