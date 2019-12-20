package com.frex.fitness.repository;

import com.frex.fitness.model.FavouritesInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FavouritesInfoRepository extends MongoRepository<FavouritesInfo, String> {
    public List<FavouritesInfo> findFavouritesInfoByUserId(String userId);
}
