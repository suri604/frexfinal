package com.frex.fitness.controller;

import com.frex.fitness.exception.FreakInfoAlreadyExistsException;
import com.frex.fitness.exception.FreakInfoDoesNotExistException;
import com.frex.fitness.model.FreakInfo;
import com.frex.fitness.service.FreakInfoService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/freakInfo/")
public class FreakInfoController {
    private FreakInfoService freakInfoService;

    @Autowired
    FreakInfoController(FreakInfoService freakInfoService) {
        this.freakInfoService = freakInfoService;
    }

    @GetMapping("retrieve")
    public ResponseEntity retrieveFreakInfo(@RequestHeader String userId, @RequestHeader String activityType) throws FreakInfoDoesNotExistException, JSONException {
//        JSONObject response = new JSONObject().put("result", this.freakInfoService.retrieveFreakInfo(userId, activityType));
        return ResponseEntity.ok(this.freakInfoService.retrieveFreakInfo(userId, activityType));
    }

    @PostMapping("save")
    public ResponseEntity saveFreakInfo(@RequestBody FreakInfo freakInfo) throws FreakInfoAlreadyExistsException, JSONException {
        System.out.println(freakInfo);
        JSONObject response = new JSONObject().put("result", this.freakInfoService.saveFreakInfo(freakInfo));
        return new ResponseEntity<>(response.toString(), HttpStatus.CREATED);
    }

    @GetMapping("check")
    public ResponseEntity checkIfExists(@RequestHeader String userId, @RequestHeader String activityType) throws JSONException {
        JSONObject response = new JSONObject().put("result", this.freakInfoService.checkIfExists(userId, activityType));
        return ResponseEntity.ok(response.toString());
    }

    @PutMapping("update")
    private ResponseEntity updateFreakInfo(@RequestBody FreakInfo freakInfo) throws FreakInfoDoesNotExistException, JSONException {
        System.out.println(freakInfo);
        JSONObject response = new JSONObject().put("result", this.freakInfoService.updateFreakInfo(freakInfo));
        return new ResponseEntity<>(response.toString(), HttpStatus.OK);
    }

    @DeleteMapping("delete")
    private boolean deleteFreakInfo(@RequestHeader String userId, @RequestHeader String activityType) {
        return this.freakInfoService.deleteFreakInfo(userId, activityType);
    }
}
