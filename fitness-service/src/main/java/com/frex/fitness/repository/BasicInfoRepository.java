package com.frex.fitness.repository;

import com.frex.fitness.model.BasicInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BasicInfoRepository extends MongoRepository<BasicInfo, String> {
}
