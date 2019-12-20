package com.frex.fitness.service;

import com.frex.fitness.exception.FitInfoAlreadyExistsException;
import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.FitInfo;
import org.json.JSONException;

import java.io.IOException;

public interface FitInfoService {
    //check
    public boolean checkIfExists(String userId);

    //create
    public FitInfo save(FitInfo fitInfo) throws FitInfoAlreadyExistsException;

    //retrieve
    public FitInfo retrieve(String userId) throws FitInfoDoesNotExistException, JSONException, RefreshTokenNotFoundException, IOException;

    //update
    public FitInfo update(FitInfo fitInfo) throws FitInfoDoesNotExistException;

    boolean isValid(String userId) throws FitInfoDoesNotExistException;

    //delete
    public FitInfo delete(String userId);

    FitInfo createAccessToken(String authCode, String userId) throws IOException;

    FitInfo refreshAccessToken(String userId) throws FitInfoDoesNotExistException, IOException, JSONException, RefreshTokenNotFoundException;
}
