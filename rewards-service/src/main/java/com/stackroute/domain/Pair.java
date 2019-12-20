package com.stackroute.domain;

public class Pair {
    public String day;
    public int points;

    public Pair(String day, int points) {
        this.day = day;
        this.points = points;
    }

    public Pair() {
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
