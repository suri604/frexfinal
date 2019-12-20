package com.stackroute.domain.fitness;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
public class FitnessRewards {
    @Id
    private String activityInfoId;
    private String userId;
    private String activityType;
    private String date;
    private int points;

    public FitnessRewards(String userId, String activityType, String date, int points) {
        this.activityInfoId = userId + ":" + activityType + ":" + date;
        this.userId = userId;
        this.activityType = activityType;
        this.date = date;
        this.points = points;
    }
}
