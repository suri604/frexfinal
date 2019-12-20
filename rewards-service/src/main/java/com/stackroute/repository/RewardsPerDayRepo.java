package com.stackroute.repository;


import com.stackroute.domain.fitness.FitnessPerDay;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;

public interface RewardsPerDayRepo extends MongoRepository<FitnessPerDay,Integer> {
    public FitnessPerDay  findFitnessPerDaysByDay(String day);
}
