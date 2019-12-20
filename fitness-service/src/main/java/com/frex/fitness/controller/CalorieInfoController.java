package com.frex.fitness.controller;

import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.service.ActivityInfoService;
import com.frex.fitness.service.CalorieInfoService;
import com.frex.fitness.service.FitInfoService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.time.LocalDateTime;

@RestController
@RequestMapping("api/v1/calorieInfo/")
@CrossOrigin("*")
public class CalorieInfoController {
    private CalorieInfoService calorieInfoService;

    public CalorieInfoController(@Autowired CalorieInfoService calorieInfoService) {
        this.calorieInfoService = calorieInfoService;
    }

    @GetMapping("getForToday")
    public ResponseEntity<?> getCalorieInfoForToday(@RequestHeader String userId) throws FitInfoDoesNotExistException, JSONException, RefreshTokenNotFoundException, IOException {
        LocalDateTime localDateTime = LocalDateTime.now();
        String date = localDateTime.getDayOfMonth() + "/" + localDateTime.getMonthValue() + "/" + localDateTime.getYear();
        JSONObject response = new JSONObject().put("result", this.calorieInfoService.getCalorieInfoForToday(userId, date).getCalories());
        return ResponseEntity.ok(response.toString());
    }

}
