package com.stackroute.service;

import com.stackroute.domain.Photo;
import com.stackroute.domain.Rewards;

import com.stackroute.domain.total.UpdateTotal;
import com.stackroute.repository.Rewardsrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RewardsServiceImpl implements RewardService {

    @Autowired
    public Rewardsrepo rewardsrepo;


    @Override
    public Rewards saveRewards(Rewards rewards) {
        Rewards rewards1 = rewardsrepo.save(rewards);
        return rewards1;
    }

    @Override
    public List<Rewards> getAllRewards() {
        return rewardsrepo.findAll();
    }

    @Override
    public void deleteRewards(String username) {

    }

    @Override
    public Rewards findRewards(String name) {
        return rewardsrepo.findRewardsByUsername(name);
    }

    @Override
    public List<Rewards> getTop10() {
        return rewardsrepo.findAll(new Sort(Sort.Direction.DESC, "xps"));
    }

    @Override
    public void updateRewards(Rewards rewards) {
      rewardsrepo.save(rewards);
    }

    @Override
    public Rewards manage(UpdateTotal update) {
        Rewards existing=  rewardsrepo.findRewardsByUsername(update.getUsername());
            int currentXps=existing.getXps();
            existing.setXps(currentXps-update.getPoints());
           rewardsrepo.save(existing);
           return existing;
    }


}
