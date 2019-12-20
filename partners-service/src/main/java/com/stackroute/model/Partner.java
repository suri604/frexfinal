package com.stackroute.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Partner {
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String companyName;
    private String website;
    private String email;
    private long phone;
    private String country;
    private long noOfEmployees;
    private String partnerType;
    private String productUrl;
    private String couponCode;
}