package com.stackroute.domain.environment;

public class DonatePoints {
    private  String username;
    private  String reciever;
    private  int point;

    public DonatePoints(String username, String reciever, int point) {
        this.username = username;
        this.reciever = reciever;
        this.point = point;
    }

    public DonatePoints() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getReciever() {
        return reciever;
    }

    public void setReciever(String reciever) {
        this.reciever = reciever;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }
}
