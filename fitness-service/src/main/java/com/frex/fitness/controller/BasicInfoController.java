package com.frex.fitness.controller;

import com.frex.fitness.exception.BasicInfoAlreadySavedException;
import com.frex.fitness.exception.BasicInfoDoesNotExistException;
import com.frex.fitness.model.BasicInfo;
import com.frex.fitness.service.BasicInfoService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/basicInfo/")
public class BasicInfoController {
    private BasicInfoService basicInfoService;

    @Autowired
    BasicInfoController(BasicInfoService basicInfoService) {
        this.basicInfoService = basicInfoService;
    }

    @GetMapping("retrieve")
    public BasicInfo retrieveBasicInfo(@RequestHeader String userId) throws BasicInfoDoesNotExistException {
        return this.basicInfoService.retrieveBasicInfo(userId);
    }

    @PostMapping("save")
    public ResponseEntity saveBasicInfo(@RequestBody BasicInfo basicInfo) throws BasicInfoAlreadySavedException {
        return new ResponseEntity<>(new JSONObject(this.basicInfoService.saveBasicInfo(basicInfo)).toString(), HttpStatus.CREATED);
    }

    @GetMapping("check")
    public ResponseEntity checkIfExists(@RequestHeader String userId) throws JSONException {
        JSONObject response = new JSONObject();
        response.put("result", this.basicInfoService.checkIfExists(userId));
        return ResponseEntity.ok(response.toString());
    }

    @PutMapping("update")
    private boolean updateBasicInfo(@RequestBody BasicInfo basicInfo) throws BasicInfoDoesNotExistException {
        return this.basicInfoService.updateBasicInfo(basicInfo);
    }

    @DeleteMapping("delete")
    private boolean deleteBasicInfo(@RequestHeader String userId) {
        return this.basicInfoService.deleteBasicInfo(userId);
    }
}
