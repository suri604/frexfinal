package com.stackroute.service;

import com.stackroute.domain.Pair;
import com.stackroute.domain.Photo;
import com.stackroute.domain.PhotoRewards;
import com.stackroute.domain.fitness.FitnessPerDay;
import com.stackroute.repository.PhotoRewardsRepo;


import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PhotoRewardsServiceImpl implements PhotoRewardsService {
    @Autowired
    PhotoRewardsRepo photoRewardsRepo;


    public void savePhotoRewards(String name){
        System.out.println("came in saving");
        PhotoRewards existing= photoRewardsRepo.findPhotoRewardsByUsername(name);
        System.out.println("afterfinding");
        if(existing==null){


            PhotoRewards newPhotoRewards= new PhotoRewards(name,1);

           photoRewardsRepo.save(newPhotoRewards);
        }
        else{

            PhotoRewards newPhotoRewards= new PhotoRewards();
            newPhotoRewards.setUsername(name);
            newPhotoRewards.setXps(existing.getXps()+1);
            photoRewardsRepo.save(newPhotoRewards);
        }
    }
    public PhotoRewards getPhotoRewards(String name){
        return photoRewardsRepo.findPhotoRewardsByUsername(name);
    }

    public List<PhotoRewards> getAll(){
        return photoRewardsRepo.findAll();
    }


}
