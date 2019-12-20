package com.stackroute.domain.total;

public class UpdateTotal {

    private  String  Username;
    private  int points;

    public UpdateTotal(String username, int points) {
        Username = username;
        this.points = points;
    }

    public UpdateTotal() {
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
