package com.frex.fitness.service;

import com.frex.fitness.exception.FreakInfoAlreadyExistsException;
import com.frex.fitness.exception.FreakInfoDoesNotExistException;
import com.frex.fitness.model.FreakInfo;

public interface FreakInfoService {
    //create
    public boolean saveFreakInfo(FreakInfo freakInfo) throws FreakInfoAlreadyExistsException;

    //retrieve
    public FreakInfo retrieveFreakInfo(String userId, String activityType) throws FreakInfoDoesNotExistException;

    //update
    public boolean updateFreakInfo(FreakInfo freakInfo) throws FreakInfoDoesNotExistException;

    //delete
    public boolean deleteFreakInfo(String userId, String activityType);

    //check
    public boolean checkIfExists(String userId, String activityType);
}
