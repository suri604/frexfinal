package com.frex.fitness.service;

import com.frex.fitness.exception.BasicInfoAlreadySavedException;
import com.frex.fitness.exception.BasicInfoDoesNotExistException;
import com.frex.fitness.model.BasicInfo;

public interface BasicInfoService {
    //Create
    boolean saveBasicInfo(BasicInfo basicInfo) throws BasicInfoAlreadySavedException;
    //Retrive
    BasicInfo retrieveBasicInfo(String userId) throws BasicInfoDoesNotExistException;
    //Update
    boolean updateBasicInfo(BasicInfo basicInfo) throws BasicInfoDoesNotExistException;
    //Delete
    boolean deleteBasicInfo(String userId);
    //Check
    boolean checkIfExists(String userId);
}
