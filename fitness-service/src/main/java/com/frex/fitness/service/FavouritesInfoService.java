package com.frex.fitness.service;

import com.frex.fitness.model.FavouritesInfo;

import java.util.List;

public interface FavouritesInfoService {
    List<String> getAllFavourites(String userId);

    FavouritesInfo save(String userId, String activityType);

    void delete(String userId, String activityType);
}
