package com.stackroute.repository;

import com.stackroute.domain.Rewards;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface Rewardsrepo  extends MongoRepository<Rewards, Integer> {

    public Rewards findRewardsByUsername(String username);



      public  List<Rewards> OrderByXps();



}
