package com.stackroute.domain;

import java.util.Date;

public class Ticket {
    private int ticketNumber;
    private int price;

    private String username;


    private Date date;
    private int distance;



    public Ticket(int ticketNumber, int price, Date date, int distance, String username) {
        this.ticketNumber = ticketNumber;
        this.price = price;
        this.date = date;
        this.distance = distance;

        this.username=username;

    }

    public Ticket() {
    }



    public int getTicketNumber() {
        return ticketNumber;
    }

    public void setTicketNumber(int ticketNumber) {
        this.ticketNumber = ticketNumber;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "ticketNumber=" + ticketNumber +
                ", price=" + price +
                ", date=" + date +
                ", distance=" + distance +
                ", username='" + username + '\'' +
                '}';
    }
}
