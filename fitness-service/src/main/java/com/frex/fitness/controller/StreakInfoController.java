package com.frex.fitness.controller;

import com.frex.fitness.exception.BasicInfoDoesNotExistException;
import com.frex.fitness.exception.FreakInfoDoesNotExistException;
import com.frex.fitness.service.StreakInfoService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RequestMapping("api/v1/streakInfo/")
@RestController
public class StreakInfoController {
    StreakInfoService streakInfoService;

    @Autowired
    StreakInfoController(StreakInfoService streakInfoService) {
        this.streakInfoService = streakInfoService;
    }

    @RequestMapping("countToday")
    public ResponseEntity<?> streakCountToday(@RequestHeader String userId, @RequestHeader String activityType) throws JSONException, BasicInfoDoesNotExistException, FreakInfoDoesNotExistException {
        JSONObject response = new JSONObject().put("result", streakInfoService.getStreakCount(userId, activityType));
        return ResponseEntity.ok(response.toString());
    }
}
