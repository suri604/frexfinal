package com.frex.fitness.service;

import com.frex.fitness.exception.BasicInfoAlreadySavedException;
import com.frex.fitness.exception.BasicInfoDoesNotExistException;
import com.frex.fitness.model.BasicInfo;
import com.frex.fitness.repository.BasicInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BasicInfoServiceImpl implements BasicInfoService {

    private BasicInfoRepository basicInfoRepository;

    @Autowired
    public BasicInfoServiceImpl(BasicInfoRepository basicInfoRepository) {
        this.basicInfoRepository = basicInfoRepository;
    }

    @Override
    public boolean saveBasicInfo(BasicInfo basicInfo) throws BasicInfoAlreadySavedException {
        if (this.basicInfoRepository.existsById(basicInfo.getUserId())) {
            throw new BasicInfoAlreadySavedException("basic info for user corresponding with " + basicInfo.getUserId() + " already exists");
        } else {
            this.basicInfoRepository.save(basicInfo);
            return true;
        }
    }

    @Override
    public BasicInfo retrieveBasicInfo(String userId) throws BasicInfoDoesNotExistException {
        if(this.basicInfoRepository.findById(userId).isPresent()) {
            return this.basicInfoRepository.findById(userId).get();
        } else {
            throw new BasicInfoDoesNotExistException("basic info does not exist for user "+userId);
        }
    }

    @Override
    public boolean updateBasicInfo(BasicInfo basicInfo) throws BasicInfoDoesNotExistException {
        if (this.basicInfoRepository.findById(basicInfo.getUserId()).isPresent()){
            this.basicInfoRepository.save(basicInfo);
            return true;
        } else {
            throw new BasicInfoDoesNotExistException("basic info does not exist for user "+basicInfo.getUserId());
        }
    }

    @Override
    public boolean deleteBasicInfo(String userId) {
        //TODO: don't know if delete is even required
        return false;
    }

    @Override
    public boolean checkIfExists(String userId) {
        return this.basicInfoRepository.findById(userId).isPresent();
    }

}
