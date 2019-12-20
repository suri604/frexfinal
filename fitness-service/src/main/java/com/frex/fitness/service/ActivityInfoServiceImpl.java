package com.frex.fitness.service;

import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.ActivityInfo;
import com.frex.fitness.model.FitInfo;
import com.frex.fitness.repository.ActivityInfoRepository;
import com.google.api.client.json.Json;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
public class ActivityInfoServiceImpl implements ActivityInfoService {
    private ActivityInfoRepository activityInfoRepository;
    private RestTemplate restTemplate = new RestTemplate();
    private FitInfoService fitInfoService;

    public ActivityInfoServiceImpl(@Autowired ActivityInfoRepository activityInfoRepository, @Autowired FitInfoService fitInfoService) {
        this.activityInfoRepository = activityInfoRepository;
        this.fitInfoService = fitInfoService;
    }

    @Override
    public ActivityInfo getActivityInfoForToday(String userId, String activityType, String date) throws FitInfoDoesNotExistException, RefreshTokenNotFoundException, JSONException, IOException {
        String activityInfoId = userId + ":" + activityType + ":" + date;
        int points = pointsFromActivity(activityType, userId);
        //Create or Update activity Info for today
        if (activityInfoRepository.findById(activityInfoId).isPresent()) {
            ActivityInfo activityInfo = activityInfoRepository.findById(activityInfoId).get();
            activityInfo.setPoints(points);
            return activityInfoRepository.save(activityInfo);
        } else {
            ActivityInfo activityInfo = new ActivityInfo();
            activityInfo.setActivityInfoId(activityInfoId);
            activityInfo.setUserId(userId);
            activityInfo.setActivityType(activityType);
            activityInfo.setDate(date);
            activityInfo.setPoints(points);
            return activityInfoRepository.save(activityInfo);
        }
    }

    private int pointsFromActivity(String activityType, String userId) throws RefreshTokenNotFoundException, FitInfoDoesNotExistException, JSONException, IOException {
        switch (activityType) {
            case "1":
                return getStepCountForToday(userId);
            case "2":
                return getBikingPointsForToday(userId);
            default:
                return getActivityPointsForToday(userId, activityType);
        }
    }

    private int getBikingPointsForToday(String userId) {
        return 0;
    }

    private int getStepCountForToday(String userId) throws FitInfoDoesNotExistException, RefreshTokenNotFoundException, IOException, JSONException {
        HttpHeaders headers = new HttpHeaders();
        FitInfo fitInfo = fitInfoService.retrieve(userId);
        Map<String, Object> content = new HashMap<>();
        Map<String, String> aggregateBy = new HashMap<>();
        aggregateBy.put("dataSourceId", "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps");
        aggregateBy.put("dataTypeName", "com.google.step_count.delta");
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
        int steps = 0;
        JSONArray responseJSON = new JSONObject(response.getBody()).getJSONArray("bucket").getJSONObject(0).getJSONArray("dataset").getJSONObject(0).getJSONArray("point");
        for (int i = 0; i < responseJSON.length(); i++) {
            steps += responseJSON.getJSONObject(i).getJSONArray("value").getJSONObject(0).getInt("intVal");
        }
        return steps;
    }

    private int getActivityPointsForToday(String userId, String activityType) {
        return 0;
    }


}
