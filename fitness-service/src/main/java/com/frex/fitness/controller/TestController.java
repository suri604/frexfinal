package com.frex.fitness.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/test")
@CrossOrigin("*")
public class TestController {
    @GetMapping
    public ResponseEntity<?> test() throws JSONException {
        JSONObject response = new JSONObject();
        response.put("result", "ok");
        return ResponseEntity.ok(response.toString());
    }
}
