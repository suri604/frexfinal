package com.frex.fitness.exception;

public class RefreshTokenNotFoundException extends Exception {
    public RefreshTokenNotFoundException(String reason) {
        super(reason);
    }
}
