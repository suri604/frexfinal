package com.frex.fitness.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Document
@Data
@Getter
@Setter
public class FreakInfo {
    @Id
    private String freakInfoId;
    private String userId;
    private String activityType;
    private int rating;
    private int timeSpent;
    private FrequencyInfo frequencyInfo;

    FreakInfo(String userId, String activityType, int rating, int timeSpent, FrequencyInfo frequencyInfo) {
        this.freakInfoId = userId + ":" + activityType;
        this.userId = userId;
        this.activityType = activityType;
        this.rating = rating;
        this.timeSpent = timeSpent;
        this.frequencyInfo = frequencyInfo;
    }
}

