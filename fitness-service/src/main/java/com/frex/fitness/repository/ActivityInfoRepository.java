package com.frex.fitness.repository;

import com.frex.fitness.model.ActivityInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ActivityInfoRepository extends MongoRepository<ActivityInfo, String> {
}
