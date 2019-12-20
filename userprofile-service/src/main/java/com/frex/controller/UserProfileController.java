package com.frex.controller;

import com.frex.domain.UserProfile;
import com.frex.exceptions.ProfileAlreadyExistsException;
import com.frex.exceptions.ProfileNotFoundException;
import com.frex.service.UserProfileService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping(value = "/api/v1/")
@CrossOrigin("*")
public class UserProfileController {

    private final UserProfileService userProfileService;

    private ResponseEntity responseEntity;
    private JSONObject response;

    @Autowired
    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @PostMapping("profile")
    public ResponseEntity saveProfile(@RequestBody UserProfile userProfile) throws ProfileAlreadyExistsException {
        userProfileService.saveProfile(userProfile);
        response = new JSONObject();
        response.put("result", "success");
        responseEntity = new ResponseEntity<>(response.toString(), HttpStatus.CREATED);
        return responseEntity;
    }

    @GetMapping("profile/{userName}")
    public ResponseEntity viewProfile(@PathVariable String userName) throws ProfileNotFoundException {
        UserProfile resultObject = userProfileService.viewProfile(userName);
        responseEntity = new ResponseEntity<>(resultObject, HttpStatus.OK);
        return responseEntity;
    }
    @PutMapping(value = "profile/{userName}", produces = "application/json")
    public ResponseEntity<?> updateProfile(@PathVariable String userName,@RequestBody UserProfile userProfile) throws ProfileNotFoundException {
        userProfileService.updateProfile(userName,userProfile);
        responseEntity = new ResponseEntity<>("updated", HttpStatus.OK);
        return responseEntity;
    }

    @DeleteMapping("profile/{userName}")
    public ResponseEntity<?> deleteProfile(@PathVariable String userName) throws ProfileNotFoundException {
        userProfileService.deleteProfile(userName);
        response = new JSONObject();
        response.put("result", "deleted");
        responseEntity = new ResponseEntity<>(response.toString(), HttpStatus.OK);
        return responseEntity;
    }

//    @PostMapping(value = "profile/profilePic")
//    public ResponseEntity postImage(@RequestParam("file") MultipartFile file) {
//        System.out.println("received picture");
//        try {
//            userProfileService.uploadProfilePic(file);
//        } catch (Exception e) {
//            e.printStackTrace();
//            responseEntity=new ResponseEntity<>("Error updating profile picture",HttpStatus.NOT_FOUND);
//        }
//        return responseEntity;
//
//    }
//
//    @PostMapping(value = "profile/govtProof")
//    public ResponseEntity<?> postProof(@RequestParam("file") MultipartFile file) {
//        System.out.println("received proof");
//        try {
//            userProfileService.uploadGovtProof(file);
//        } catch (Exception e) {
//            e.printStackTrace();
//            responseEntity=new ResponseEntity<>("Error updating profile picture",HttpStatus.NOT_FOUND);
//        }
//        return responseEntity;
//    }
}
