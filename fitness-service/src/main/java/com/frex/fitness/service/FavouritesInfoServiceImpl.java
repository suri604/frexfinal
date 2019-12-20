package com.frex.fitness.service;

import com.frex.fitness.model.FavouritesInfo;
import com.frex.fitness.repository.FavouritesInfoRepository;
import org.apache.kafka.common.protocol.types.Field;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavouritesInfoServiceImpl implements FavouritesInfoService {
    private FavouritesInfoRepository favouritesInfoRepository;

    @Autowired
    FavouritesInfoServiceImpl(FavouritesInfoRepository favouritesInfoRepository) {
        this.favouritesInfoRepository = favouritesInfoRepository;
    }

    @Override
    public List<String> getAllFavourites(String userId) {
        List<String> favourites = new ArrayList<>();
        for (FavouritesInfo favouritesInfo : this.favouritesInfoRepository.findFavouritesInfoByUserId(userId)) {
            favourites.add(favouritesInfo.getActivityType());
        }
        return favourites;
    }

    @Override
    public FavouritesInfo save(String userId, String activityType) {
        FavouritesInfo favouritesInfo = new FavouritesInfo(userId, activityType);
        return favouritesInfoRepository.save(favouritesInfo);
    }

    @Override
    public void delete(String userId, String activityType) {
        favouritesInfoRepository.deleteById(userId + ":" + activityType);
    }
}
