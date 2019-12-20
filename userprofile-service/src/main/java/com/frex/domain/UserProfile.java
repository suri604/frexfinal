package com.frex.domain;


import lombok.*;
import org.springframework.data.annotation.Id;



@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserProfile {
    @Id
    private String userName;
    private String firstName;
    private String lastName;
    private String dateOfBirth;
    private String gender;
    private String address;
    private String country;
    private long phoneNumber;
    private String mailId;
    private String idNumber;
    private String imgURL;
    private String docURL;
    private boolean proofFlag;


    //private Image proofImage;
    //private Image profileImage;



}
