package com.frex.fitness.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class StreakInfo {
    @Id
    String streakInfoId;
    String userId;
    String activityType;
    String date;
    int streakCount;

    public StreakInfo(String userId, String activityType, String date, int streakCount) {
        this.streakInfoId = userId + ":" + activityType + ":" + date;
        this.userId = userId;
        this.activityType = activityType;
        this.date = date;
        this.streakCount = streakCount;
    }
}
