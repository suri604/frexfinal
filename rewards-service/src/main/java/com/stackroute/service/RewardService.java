package com.stackroute.service;

import com.stackroute.domain.Photo;
import com.stackroute.domain.Rewards;
import com.stackroute.domain.total.UpdateTotal;
import org.springframework.data.mongodb.core.query.Update;


import java.util.List;

public interface RewardService {
    public Rewards saveRewards(Rewards rewards) ;

    public List<Rewards> getAllRewards();
    public void deleteRewards(String username);

    Rewards findRewards(String name);

   public  List<Rewards> getTop10();
   public void updateRewards(Rewards rewards);
   public Rewards manage(UpdateTotal update);

}
