package com.stackroute.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class PhotoRewards {

    @Id
    public  String username;
    public  int xps;



    public PhotoRewards(String username, int xps) {
        this.username = username;
        this.xps = xps;

    }

    public PhotoRewards() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getXps() {
        return xps;
    }

    public void setXps(int xps) {
        this.xps = xps;
    }


}
