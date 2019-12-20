package com.stackroute.domain;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Rewards {

      @Id
    private String username;
     private int xps;
     private String freaking_mode;
     private int level;
     private double performance;
     private List<Integer>  history;

    public Rewards(String username, int xps, String freaking_mode, int level,double performance,List<Integer> history) {
        this.username = username;
        this.xps = xps;
        this.freaking_mode = freaking_mode;
        this.level = level;
        this.performance = performance;
        this.history=history;
    }

    public Rewards() {
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

    public String getFreaking_mode() {
        return freaking_mode;
    }

    public void setFreaking_mode(String freaking_mode) {
        this.freaking_mode = freaking_mode;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public double getPerformance() {
        return performance;
    }

    public void setPerformance(double performance) {
        this.performance = performance;
    }

    public List<Integer> getHistory() {
        return history;
    }

    public void setHistory(List<Integer> history) {
        this.history = history;
    }
}
