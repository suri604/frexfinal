package com.frex.fitness.controller;

import com.frex.fitness.model.FavouritesInfo;
import com.frex.fitness.service.FavouritesInfoService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/favouritesInfo/")
public class FavouritesInfoController {
    FavouritesInfoService favouritesInfoService;

    @Autowired
    FavouritesInfoController(FavouritesInfoService favouritesInfoService) {
        this.favouritesInfoService = favouritesInfoService;
    }

    @RequestMapping("save")
    public ResponseEntity<?> save(@RequestHeader String userId, @RequestHeader String activityType) throws JSONException {
        JSONObject response = new JSONObject();
        favouritesInfoService.save(userId, activityType);
        response.put("result", true);
        return ResponseEntity.ok(response);
    }

    @RequestMapping("delete")
    public ResponseEntity<?> delete(@RequestHeader String userId, @RequestHeader String activityType) throws JSONException {
        JSONObject response = new JSONObject();
        favouritesInfoService.delete(userId, activityType);
        response.put("result", true);
        return ResponseEntity.ok(response);
    }

    @RequestMapping("getAll")
    public ResponseEntity<?> getAll(@RequestHeader String userId) throws JSONException {
        JSONObject response = new JSONObject();
        response.put("result", favouritesInfoService.getAllFavourites(userId));
        return ResponseEntity.ok(response);
    }
}
