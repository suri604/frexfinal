package com.frex.fitness.service;

import com.frex.fitness.exception.FitInfoAlreadyExistsException;
import com.frex.fitness.exception.FitInfoDoesNotExistException;
import com.frex.fitness.exception.RefreshTokenNotFoundException;
import com.frex.fitness.model.FitInfo;
import com.frex.fitness.repository.FitInfoRepository;
import com.google.api.client.auth.oauth2.TokenResponse;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleRefreshTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Service
public class FitInfoServiceImpl implements FitInfoService {
    private FitInfoRepository fitInfoRepository;
    @Value("${REDIRECT_URI}")
    private String REDIRECT_URI;
    @Value("${CLIENT_ID}")
    private String CLIENT_ID;
    @Value("${CLIENT_SECRET}")
    private String CLIENT_SECRET;

    @Autowired
    public FitInfoServiceImpl(FitInfoRepository fitInfoRepository) {
        this.fitInfoRepository = fitInfoRepository;
    }

    @Override
    public boolean checkIfExists(String userId) {
        return fitInfoRepository.findById(userId).isPresent();
    }

    @Override
    public FitInfo save(FitInfo fitInfo) throws FitInfoAlreadyExistsException {
        if (fitInfoRepository.findById(fitInfo.getUserId()).isPresent()) {
            throw new FitInfoAlreadyExistsException("FitInfo already exists for user" + fitInfo.getUserId());
        } else {
            return this.fitInfoRepository.save(fitInfo);
        }
    }

    @Override
    public FitInfo retrieve(String userId) throws FitInfoDoesNotExistException, JSONException, RefreshTokenNotFoundException, IOException {
        if (fitInfoRepository.findById(userId).isPresent()) {
            FitInfo fitInfo = fitInfoRepository.findById(userId).get();
            if (!fitInfo.isValid()) {
                return this.refreshAccessToken(userId);
            }
            return fitInfo;
        } else {
            throw new FitInfoDoesNotExistException("Fit info does not exist for user" + userId);
        }
    }

    @Override
    public FitInfo update(FitInfo fitInfo) throws FitInfoDoesNotExistException {
        if (fitInfoRepository.findById(fitInfo.getUserId()).isPresent()) {
            return fitInfoRepository.save(fitInfo);
        } else {
            throw new FitInfoDoesNotExistException("Fit info does not exist for user" + fitInfo.getUserId());
        }
    }

    @Override
    public boolean isValid(String userId) throws FitInfoDoesNotExistException {
        if (fitInfoRepository.findById(userId).isPresent()) {
            return fitInfoRepository.findById(userId).get().isValid();
        } else {
            throw new FitInfoDoesNotExistException("Fit info does not exist for user" + userId);
        }
    }

    @Override
    public FitInfo delete(String userId) {
        return null;
    }

    @Override
    public FitInfo createAccessToken(String authCode, String userId) throws IOException {
        GoogleTokenResponse tokenResponse = new GoogleAuthorizationCodeTokenRequest(
                new NetHttpTransport(),
                JacksonFactory.getDefaultInstance(),
                CLIENT_ID,
                CLIENT_SECRET,
                authCode,
                REDIRECT_URI).execute();
        String accessToken = tokenResponse.getAccessToken();
        String refreshToken = tokenResponse.getRefreshToken();
        long millis = LocalDateTime.now().atZone(ZoneId.systemDefault())
                .plusSeconds(tokenResponse.getExpiresInSeconds()).toInstant().getEpochSecond();
        FitInfo fitInfo = new FitInfo();
        fitInfo.setAuthCode(authCode);
        fitInfo.setAccessToken(accessToken);
        fitInfo.setRefreshToken(refreshToken);
        fitInfo.setUserId(userId);
        fitInfo.setExpiresAt(millis);
        return fitInfoRepository.save(fitInfo);
    }

    @Override
    public FitInfo refreshAccessToken(String userId) throws FitInfoDoesNotExistException, IOException, JSONException, RefreshTokenNotFoundException {
        if (fitInfoRepository.findById(userId).isPresent()) {
            FitInfo fitInfo = fitInfoRepository.findById(userId).get();
            System.out.println(fitInfo);
            if (fitInfo.getRefreshToken() == null || fitInfo.getRefreshToken().equals("")) {
                JSONObject reason = new JSONObject();
                reason.put("userId", userId);
                throw new RefreshTokenNotFoundException(reason.toString());
            } else {
                TokenResponse tokenResponse = new GoogleRefreshTokenRequest(new NetHttpTransport(), new JacksonFactory(),
                        fitInfo.getRefreshToken(), CLIENT_ID, CLIENT_SECRET).setGrantType("refresh_token").execute();
                fitInfo.calculateExpiresIn(tokenResponse.getExpiresInSeconds());
                fitInfo.setAccessToken(tokenResponse.getAccessToken());
                return fitInfoRepository.save(fitInfo);
            }
        } else {
            throw new FitInfoDoesNotExistException("Fit info does not exist for user" + userId);
        }
    }

}
