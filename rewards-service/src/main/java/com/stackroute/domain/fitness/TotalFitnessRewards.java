package com.stackroute.domain.fitness;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TotalFitnessRewards {
    @Id
    private String username;
    private int points;
    private double Performance;

    public TotalFitnessRewards(String username, int points, double performance) {
        this.username = username;
        this.points = points;
        Performance = performance;
    }

    public TotalFitnessRewards() {
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

    public double getPerformance() {
        return Performance;
    }

    public void setPerformance(double performance) {
        Performance = performance;
    }
}
