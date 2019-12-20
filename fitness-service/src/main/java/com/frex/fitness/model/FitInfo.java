package com.frex.fitness.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.ZoneId;

@Document
@Data
public class FitInfo {
    @Id
    String userId;
    String authCode;
    String accessToken;
    String refreshToken;
    String emailId;
    long expiresAt;

    public boolean isValid() {
        return LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().getEpochSecond() < expiresAt;
    }

    public void calculateExpiresIn(long seconds) {
        this.expiresAt = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().plusSeconds(seconds).getEpochSecond();
    }
}
