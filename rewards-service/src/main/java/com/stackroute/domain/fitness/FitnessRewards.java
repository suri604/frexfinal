package com.stackroute.domain.fitness;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;


public class FitnessRewards {

   private String activityInfoId;
   private String userId;
   private String activityType;
   private  String date;
   private int points;



    public FitnessRewards(String activityInfoId, String userId, String activityType, String data, int points) {
        this.activityInfoId = activityInfoId;
        this.userId = userId;
        this.activityType = activityType;
        this.date = data;
        this.points = points;
    }

    public FitnessRewards() {
    }

    public String getActivityInfoId() {
        return activityInfoId;
    }

    public void setActivityInfoId(String activityInfoId) {
        this.activityInfoId = activityInfoId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getActivityType() {
        return activityType;
    }

    public void setActivityType(String activityType) {
        this.activityType = activityType;
    }

    public String getData() {
        return date;
    }

    public void setData(String data) {
        this.date = data;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
