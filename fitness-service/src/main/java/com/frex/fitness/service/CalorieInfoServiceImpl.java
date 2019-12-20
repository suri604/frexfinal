package com.frex.fitness.service;

import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.ActivityInfo;
import com.frex.fitness.model.CalorieInfo;
import com.frex.fitness.model.FitInfo;
import com.frex.fitness.repository.CalorieInfoRepository;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Service
public class CalorieInfoServiceImpl implements CalorieInfoService {
    private FitInfoService fitInfoService;
    private CalorieInfoRepository calorieInfoRepository;
    private RestTemplate restTemplate = new RestTemplate();

    public CalorieInfoServiceImpl(@Autowired FitInfoService fitInfoService, @Autowired CalorieInfoRepository calorieInfoRepository) {
        this.fitInfoService = fitInfoService;
        this.calorieInfoRepository = calorieInfoRepository;
    }

    @Override
    public CalorieInfo getCalorieInfoForToday(String userId, String date) throws RefreshTokenNotFoundException, FitInfoDoesNotExistException, JSONException, IOException {
        String calorieInfoId = userId + ":" + date;
        float calories = getCaloriesForToday(userId);
        //Create or Update activity Info for today
        if (calorieInfoRepository.findById(calorieInfoId).isPresent()) {
            CalorieInfo calorieInfo = calorieInfoRepository.findById(calorieInfoId).get();
            calorieInfo.setCalories(calories);
            return calorieInfoRepository.save(calorieInfo);
        } else {
            CalorieInfo calorieInfo = new CalorieInfo();
            calorieInfo.setActivityInfoId(calorieInfoId);
            calorieInfo.setUserId(userId);
            calorieInfo.setDate(date);
            calorieInfo.setCalories(calories);
            return calorieInfoRepository.save(calorieInfo);
        }
    }

    private float getCaloriesForToday(String userId) throws RefreshTokenNotFoundException, FitInfoDoesNotExistException, JSONException, IOException {
        HttpHeaders headers = new HttpHeaders();
        FitInfo fitInfo = fitInfoService.retrieve(userId);
        Map<String, Object> content = new HashMap<>();
        Map<String, String> aggregateBy = new HashMap<>();
        aggregateBy.put("dataSourceId", "derived:com.google.calories.expended:com.google.android.gms:platform_calories_expended");
        aggregateBy.put("dataTypeName", "com.google.calories.expended");
        ArrayList<Map<String, String>> aggregates = new ArrayList<>();
        aggregates.add(aggregateBy);
        content.put("aggregateBy", aggregates);
        LocalDateTime ldt = LocalDateTime.now();
        LocalDateTime start = LocalDateTime.of(ldt.getYear(), ldt.getMonth(), ldt.getDayOfMonth(), 0, 0);
        LocalDateTime end = LocalDateTime.of(ldt.getYear(), ldt.getMonth(), ldt.getDayOfMonth(), ldt.getHour(), ldt.getMinute(), ldt.getSecond());
        content.put("startTimeMillis", start.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli());
        content.put("endTimeMillis", end.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli());
        headers.set("Authorization", "Bearer " + fitInfo.getAccessToken());
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");
        HttpEntity<?> httpEntity = new HttpEntity<>(content, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(
                "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
                httpEntity,
                String.class
        );
        float calories = 0;
        JSONArray responseJSON = new JSONObject(response.getBody()).getJSONArray("bucket").getJSONObject(0).getJSONArray("dataset").getJSONObject(0).getJSONArray("point");
        for (int i = 0; i < responseJSON.length(); i++) {
            calories += responseJSON.getJSONObject(i).getJSONArray("value").getJSONObject(0).getInt("fpVal");
        }
        return calories;
    }

}
