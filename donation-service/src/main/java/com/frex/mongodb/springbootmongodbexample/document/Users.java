package com.frex.mongodb.springbootmongodbexample.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Users {

    @Id
//    private String fullName;
//    private String emailAddress;
//    private long phoneNumber;
//    private long amount;
    // public long id;
    public String name;
    public String emailid;
    public String phonenumber;
    public long amount;
    public String country;

    public Users() {
    }

    public Users(String name, String emailid, String phonenumber, long amount, String country) {
        // this.id = id;
        this.name = name;
        this.emailid = emailid;
        this.phonenumber = phonenumber;
        this.amount = amount;
        this.country = country;
    }

    // public long getId() {
    //     return id;
    // }

    // public void setId(long id) {
    //     this.id = id;
    // }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
