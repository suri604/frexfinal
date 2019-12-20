package com.frex.exceptions;

public class ProfileNotFoundException extends Exception {

    private String message;

    public ProfileNotFoundException(){}

    public ProfileNotFoundException(String message){
        super(message);
        this.message=message;
    }
}
