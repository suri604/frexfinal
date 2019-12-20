package com.stackroute.service;

import com.stackroute.domain.Photo;
import com.stackroute.domain.PhotoRewards;

import java.util.List;

public interface PhotoRewardsService {
    public void savePhotoRewards(String name);
    public PhotoRewards getPhotoRewards(String name);
    public List<PhotoRewards> getAll();
}
