package com.frex.fitness.model;

import lombok.Data;

import java.util.Date;

@Data
public class FitnessData {
    private String userId;
    private int calories;
    private int steps;
    private Date forDate;
}
