package com.frex.service;

import com.frex.domain.UserProfile;
import com.frex.exceptions.ProfileAlreadyExistsException;
import com.frex.exceptions.ProfileNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

public interface UserProfileService {

    public UserProfile saveProfile(UserProfile profile) throws ProfileAlreadyExistsException;

    public UserProfile viewProfile(String userName) throws ProfileNotFoundException;

    public UserProfile updateProfile(String userName, UserProfile profile) throws ProfileNotFoundException;

    //govtID profile

    public UserProfile deleteProfile(String userName) throws ProfileNotFoundException;

//    void uploadProfilePic(MultipartFile profileImage) throws Exception;
//
//    void uploadGovtProof(MultipartFile profileImage) throws Exception;

}
