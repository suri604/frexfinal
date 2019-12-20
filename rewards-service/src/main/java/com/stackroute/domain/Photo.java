package com.stackroute.domain;

public class Photo {
    public String username;
    public String day;

    public Photo(String username, String day) {
        this.username = username;
        this.day = day;
    }

    public Photo() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }
}
