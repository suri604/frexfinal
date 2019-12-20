package com.frex.fitness.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
public class CalorieInfo {
    @Id
    private String activityInfoId;
    private String userId;
    private String date;
    private float calories;

    public CalorieInfo(String userId, String date, int calories) {
        this.activityInfoId = userId + ":" + date;
        this.userId = userId;
        this.date = date;
        this.calories = calories;
    }
}