package com.frex.fitness.service;

import com.frex.fitness.exception.FreakInfoAlreadyExistsException;
import com.frex.fitness.exception.FreakInfoDoesNotExistException;
import com.frex.fitness.model.FreakInfo;
import com.frex.fitness.repository.FreakInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FreakInfoServiceImpl implements FreakInfoService {
    private FreakInfoRepository freakInfoRepository;

    @Autowired
    FreakInfoServiceImpl(FreakInfoRepository freakInfoRepository) {
        this.freakInfoRepository = freakInfoRepository;
    }

    @Override
    public boolean saveFreakInfo(FreakInfo freakInfo) throws FreakInfoAlreadyExistsException {
        if (this.freakInfoRepository.findById(freakInfo.getUserId()).isPresent()) {
            throw new FreakInfoAlreadyExistsException("Freak info for user for user corresponding to " + freakInfo.getUserId() + " already exists.");
        } else {
            this.freakInfoRepository.save(freakInfo);
            return true;
        }
    }

    @Override
    public FreakInfo retrieveFreakInfo(String userId, String activityType) throws FreakInfoDoesNotExistException {
        String id = userId + ":" + activityType;
        if (freakInfoRepository.findById(id).isPresent()) {
            return freakInfoRepository.findById(id).get();
        } else {
            throw new FreakInfoDoesNotExistException("freak info doesn't exist corresponding to user " + userId + ":" + activityType);
        }
    }

    @Override
    public boolean updateFreakInfo(FreakInfo freakInfo) throws FreakInfoDoesNotExistException {
        freakInfo.setFreakInfoId(freakInfo.getUserId() + ":" + freakInfo.getActivityType());
        System.out.println(freakInfo);
        if (freakInfoRepository.findById(freakInfo.getFreakInfoId()).isPresent()) {
            FreakInfo freakInfo1 = freakInfoRepository.save(freakInfo);
            System.out.println(freakInfo1);
            return true;
        } else {
            throw new FreakInfoDoesNotExistException("freak info doesn't exist corresponding to user " + freakInfo.getFreakInfoId());
        }
    }

    @Override
    public boolean deleteFreakInfo(String userId, String activityType) {
        //TODO unused functionality as of now;
        return false;
    }

    @Override
    public boolean checkIfExists(String userId, String activityType) {
        return this.freakInfoRepository.findById(userId + ":" + activityType).isPresent();
    }
}
