package com.frex.fitness.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class BasicInfo {
    @Id
    private String userId;
    private String email;
    private int age;
    private int height;
    private int weight;
    private String gender;
}
