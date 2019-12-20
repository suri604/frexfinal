package com.frex.fitness.repository;

import com.frex.fitness.model.FreakInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FreakInfoRepository extends MongoRepository<FreakInfo, String> {
}
