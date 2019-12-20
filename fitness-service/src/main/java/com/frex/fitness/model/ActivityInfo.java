package com.frex.fitness.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@NoArgsConstructor
public class ActivityInfo {
    @Id
    private String activityInfoId;
    private String userId;
    private String activityType;
    private String date;
    private int points;

    public ActivityInfo(String userId, String activityType, String date, int points) {
        this.activityInfoId = userId + ":" + activityType + ":" + date;
        this.userId = userId;
        this.activityType = activityType;
        this.date = date;
        this.points = points;
    }
}
