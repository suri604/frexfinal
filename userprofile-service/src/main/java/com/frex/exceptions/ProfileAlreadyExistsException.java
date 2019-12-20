package com.frex.exceptions;

public class ProfileAlreadyExistsException extends Exception {

    private String message;

    public ProfileAlreadyExistsException(){}

    public ProfileAlreadyExistsException(String message){
        super(message);
        this.message=message;
    }
}
