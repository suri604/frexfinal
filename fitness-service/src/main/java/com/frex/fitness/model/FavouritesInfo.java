package com.frex.fitness.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class FavouritesInfo {
    String rewardInfoId;
    String userId;
    String activityType;

    public FavouritesInfo(String userId, String activityType) {
        this.rewardInfoId = userId + ":" + activityType;
        this.activityType = activityType;
        this.userId = userId;
    }
}
