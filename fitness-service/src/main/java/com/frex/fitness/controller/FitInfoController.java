package com.frex.fitness.controller;

import com.frex.fitness.exception.FitInfoAlreadyExistsException;
import com.frex.fitness.service.FitInfoService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/fitInfo/")
public class FitInfoController {
    private RestTemplate restTemplate = new RestTemplate();
    private FitInfoService fitInfoService;

    @Autowired
    public FitInfoController(FitInfoService fitInfoService) {
        this.fitInfoService = fitInfoService;
    }

    @GetMapping("check")
    public ResponseEntity<?> checkIfExists(@RequestHeader String userId) throws JSONException {
        JSONObject response = new JSONObject();
        response.put("result", this.fitInfoService.checkIfExists(userId));
        return ResponseEntity.ok(response.toString());
    }

    @PutMapping("authCode")
    public ResponseEntity<?> createGoogleFitUser(@RequestHeader String authCode, @RequestHeader String userId) throws IOException, FitInfoAlreadyExistsException, JSONException {
        this.fitInfoService.createAccessToken(authCode, userId);
        return ResponseEntity.ok(new JSONObject().put("result", true));
    }
}
