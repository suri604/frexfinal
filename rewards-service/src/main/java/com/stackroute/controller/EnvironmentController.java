package com.stackroute.controller;


import com.stackroute.domain.Rewards;
import com.stackroute.domain.environment.DonatePoints;
import com.stackroute.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class EnvironmentController {
    @Autowired
    RewardService rewardService;

    @PostMapping("/donate")
    public ResponseEntity<?> donate(@RequestBody DonatePoints donatePoints){
        Rewards rewards= rewardService.findRewards(donatePoints.getUsername());
        if(rewards==null){
            return new ResponseEntity<String>("Sorry Doner doesn't exist ", HttpStatus.FAILED_DEPENDENCY);
        }
        else {
            Rewards reciever= rewardService.findRewards(donatePoints.getReciever());
            if(reciever==null)
            {
                return new ResponseEntity<String>("Sorry reciever doesn't exist ", HttpStatus.FAILED_DEPENDENCY);

            }
            else{
                if(rewards.getXps()<donatePoints.getPoint())
                {
                    return new ResponseEntity<String>("Sorry mate!  Not enough points to donate ", HttpStatus.FAILED_DEPENDENCY);
                }
                else{

                    rewards.setXps(rewards.getXps()-donatePoints.getPoint());
                    reciever.setXps(reciever.getXps()+donatePoints.getPoint());
                    rewardService.saveRewards(rewards);
                    rewardService.saveRewards(reciever);
                    return new ResponseEntity<String>("Successfully donated",HttpStatus.OK);
                }
            }
        }
    }
}
