package com.stackroute.repository;

import com.stackroute.domain.PhotoRewards;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoRewardsRepo  extends MongoRepository<PhotoRewards,Integer> {
    public PhotoRewards findPhotoRewardsByUsername(String username);
}
