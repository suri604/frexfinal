package com.frex.service;

import com.frex.domain.UserProfile;
import com.frex.exceptions.ProfileAlreadyExistsException;
import com.frex.exceptions.ProfileNotFoundException;
import com.frex.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    private UserProfileRepository userProfileRepository;

    @Autowired
    public UserProfileServiceImpl(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    @Override
    public UserProfile saveProfile(UserProfile profile) throws ProfileAlreadyExistsException {
        if(!userProfileRepository.existsById(profile.getUserName()))
        {
            userProfileRepository.save(profile);
            return profile;
        }
        throw new ProfileAlreadyExistsException("Profile already exists!");
    }

    @Override
    public UserProfile viewProfile(String userName) throws ProfileNotFoundException {

        if(!userProfileRepository.existsById(userName))
        {
            throw new ProfileNotFoundException("Profile not found!");
        }

        return userProfileRepository.findById(userName).get();

    }

    @Override
    public UserProfile updateProfile(String userName, UserProfile profile) throws ProfileNotFoundException{

        if(!userProfileRepository.existsById(userName)) {
            throw new ProfileNotFoundException("Profile not found! Cannot update!");
        }
        else {
            Optional<UserProfile> oldProfile = userProfileRepository.findById(userName);

            if (oldProfile.isPresent())
            {

                UserProfile newUser = oldProfile.get();
                newUser.setFirstName(profile.getFirstName());
                newUser.setLastName(profile.getLastName());
                newUser.setDateOfBirth(profile.getDateOfBirth());
                newUser.setGender(profile.getGender());
                newUser.setAddress(profile.getAddress());
                newUser.setCountry(profile.getCountry());
                newUser.setPhoneNumber(profile.getPhoneNumber());
                newUser.setMailId(profile.getMailId());
                newUser.setImgURL(profile.getImgURL());
                newUser.setIdNumber(profile.getIdNumber());
                newUser.setProofFlag(profile.isProofFlag());
                newUser.setDocURL(profile.getDocURL());

                newUser =userProfileRepository.save(newUser);

                return newUser;
            }

            else {
                throw new ProfileNotFoundException("Profile not found! Cannot update!");
            }
        }

    }

    @Override
    public UserProfile deleteProfile(String userName) throws ProfileNotFoundException {

        if (!userProfileRepository.existsById(userName)) {
            throw new ProfileNotFoundException("Profile not found! Cannot delete!");
        } else {
            Optional<UserProfile> profile = userProfileRepository.findById(userName);
            if (profile.isPresent()) {
                userProfileRepository.deleteById(userName);
                return profile.get();

            } else {
                throw new ProfileNotFoundException("Profile not found! Cannot delete!");

            }


        }
    }

//    @Override
//    public void uploadProfilePic(MultipartFile profileImage) throws Exception {
//
//        String folder = "/home/cgi/photos/profile_pics/";
//        byte[] bytes= profileImage.getBytes();
//        Path path = Paths.get(folder + profileImage.getOriginalFilename());
//        Files.write(path, bytes);
//    }
//
//    @Override
//    public void uploadGovtProof(MultipartFile proof) throws Exception {
//
//        String folder1 = "/home/cgi/photos/govt_proofs/";
//        byte[] bytes= proof.getBytes();
//        Path path = Paths.get(folder1 + proof.getOriginalFilename());
//        Files.write(path, bytes);
//    }
}
