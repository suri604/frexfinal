package com.frex.fitness.repository;

import com.frex.fitness.model.FitInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FitInfoRepository extends MongoRepository<FitInfo, String> {
}
