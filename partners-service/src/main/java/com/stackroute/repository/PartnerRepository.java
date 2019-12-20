package com.stackroute.repository;

import com.stackroute.model.Partner;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PartnerRepository extends MongoRepository<Partner, Integer> {
}

