package com.frex.fitness.controller;

import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.ActivityInfo;
import com.frex.fitness.service.ActivityInfoService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/v1/activityInfo/")
@CrossOrigin("*")
public class ActivityInfoController {
    private ActivityInfoService activityInfoService;

    public ActivityInfoController(@Autowired ActivityInfoService activityInfoService, @Autowired KafkaProducer kafkaProducer) {
        this.activityInfoService = activityInfoService;
    }

    @GetMapping("getForToday")
    public ResponseEntity<?> getActivityInfoForToday(@RequestHeader String userId, @RequestHeader String activityType) throws FitInfoDoesNotExistException, JSONException, RefreshTokenNotFoundException, IOException {
        LocalDateTime localDateTime = LocalDateTime.now();
        String date = localDateTime.getDayOfMonth() + "/" + localDateTime.getMonthValue() + "/" + localDateTime.getYear();
        ActivityInfo activityInfo = this.activityInfoService.getActivityInfoForToday(userId, activityType, date);
        JSONObject response = new JSONObject().put("result", activityInfo.getPoints());
        return ResponseEntity.ok(response.toString());
    }

}
