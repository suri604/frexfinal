package com.stackroute.repository;

import com.stackroute.domain.fitness.TotalFitnessRewards;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TotalFitnessRepo extends MongoRepository<TotalFitnessRewards,Integer> {
    public  TotalFitnessRewards findTotalFitnessRewardsByUsername(String username);
}
