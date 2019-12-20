package com.stackroute.controller;


import com.stackroute.domain.Photo;
import com.stackroute.domain.PhotoRewards;
import com.stackroute.domain.Rewards;
import com.stackroute.domain.total.UpdateTotal;
import com.stackroute.service.PhotoRewardsService;
import com.stackroute.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class RewardsController {
    ResponseEntity responseEntity;

    @Autowired
    public RewardService rewardService;

    @Autowired
    PhotoRewardsService photoRewardsService;

    @PostMapping("/saveReward")
    public String saveReward(@RequestBody Rewards rewards) {
        rewardService.saveRewards(rewards);
        return "saved";
    }

    @GetMapping("/getRewards/{name}")
    public ResponseEntity<?> getUserRewards(@PathVariable("name") final String name) {
        Rewards rewards = rewardService.findRewards(name);
        responseEntity = new ResponseEntity<Rewards>(rewards, HttpStatus.OK);
        return responseEntity;

    }

    @PostMapping("update/rewards")
    public ResponseEntity<?> updateUserRewards(@RequestBody UpdateTotal update) {
        Rewards rewards = rewardService.manage(update);
        System.out.println("came in update");
      return responseEntity= new ResponseEntity<Rewards>(rewards,HttpStatus.OK);

    }
    @GetMapping("getPhoto/{name}")
      public ResponseEntity<?> getPhotoRewards(@PathVariable("name") final  String name){
        PhotoRewards rewards= photoRewardsService.getPhotoRewards(name);
        return new ResponseEntity<PhotoRewards>(rewards,HttpStatus.OK);
    }

    @PostMapping("photo/rewards")
      public ResponseEntity<?> setPhotoRewards(@RequestBody Photo photo ){


            System.out.println("came in try block" + photo.getUsername());
            photoRewardsService.savePhotoRewards(photo.getUsername());
            responseEntity = new ResponseEntity<String>("Successfully photo rewards added", HttpStatus.OK);

        return responseEntity;
    }

    @GetMapping("getAllphotoRewards")
    public List<PhotoRewards> getAllPhotoRewards(){
        return photoRewardsService.getAll();
    }


    @GetMapping("/get10")
    public ResponseEntity gettopten() {
        List<Rewards> rewards = rewardService.getTop10();
        responseEntity = new ResponseEntity<List<Rewards>>(rewards, HttpStatus.OK);
        return responseEntity;
    }
}
