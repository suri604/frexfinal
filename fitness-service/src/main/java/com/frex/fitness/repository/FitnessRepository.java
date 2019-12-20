package com.frex.fitness.repository;

import com.frex.fitness.model.FitnessData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FitnessRepository extends MongoRepository<FitnessData, String> {
}
