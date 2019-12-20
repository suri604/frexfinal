package com.frex.fitness.controller;

import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.ActivityInfo;
import com.frex.fitness.model.CalorieInfo;
import com.frex.fitness.service.ActivityInfoService;
import com.stackroute.domain.fitness.FitnessRewards;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/rewardInfo/")
public class RewardInfoController {
    private ActivityInfoService activityInfoService;
    private KafkaProducer kafkaProducer;

    public RewardInfoController(@Autowired ActivityInfoService activityInfoService, @Autowired KafkaProducer kafkaProducer) {
        this.activityInfoService = activityInfoService;
        this.kafkaProducer = kafkaProducer;
    }

    @GetMapping("getForToday")
    public ResponseEntity<?> getRewardsForToday(@RequestHeader String userId, @RequestHeader String activityType) throws RefreshTokenNotFoundException, FitInfoDoesNotExistException, JSONException, IOException {
        LocalDateTime localDateTime = LocalDateTime.now();
        String date = localDateTime.getDayOfMonth() + "/" + localDateTime.getMonthValue() + "/" + localDateTime.getYear();
        ActivityInfo activityInfo = this.activityInfoService.getActivityInfoForToday(userId, activityType, date);
        int points = 0;
        if (activityInfo.getActivityType().equals("1")) {
            points = activityInfo.getPoints() / 50;
        } else {
            points = 50;
        }
        FitnessRewards rewardInfo = new FitnessRewards();
        rewardInfo.setActivityInfoId(activityInfo.getActivityInfoId());
        rewardInfo.setUserId(activityInfo.getUserId());
        rewardInfo.setActivityType(activityInfo.getActivityType());
        rewardInfo.setDate(activityInfo.getDate());
        rewardInfo.setPoints(activityInfo.getPoints());
        System.out.println(rewardInfo);
//        kafkaProducer.activityInfo(rewardInfo);
        JSONObject response = new JSONObject();
        response.put("result", points);
        return ResponseEntity.ok(response.toString());
    }
}
