package com.stackroute.domain.fitness;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class FitnessPerDay {
    @Id
    public String day;
    public String username;

    public int points;


    public FitnessPerDay(String day ,int points, String username) {
        this.username = username;

        this.points = points;
        this.day=day;
    }

    public FitnessPerDay() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

}
