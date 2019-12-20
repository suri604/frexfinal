package com.stackroute.domain.fitness;

import java.util.Date;

public class PerdayQuery {
    private String username;
    private Date date;

    public PerdayQuery(String username, Date date) {
        this.username = username;
        this.date = date;
    }

    public PerdayQuery() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
