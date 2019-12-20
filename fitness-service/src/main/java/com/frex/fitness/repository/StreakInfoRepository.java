package com.frex.fitness.repository;

import com.frex.fitness.model.StreakInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StreakInfoRepository extends MongoRepository<StreakInfo, String> {
}
