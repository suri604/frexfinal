package com.frex.fitness.repository;

import com.frex.fitness.model.CalorieInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CalorieInfoRepository extends MongoRepository<CalorieInfo, String> {
}
