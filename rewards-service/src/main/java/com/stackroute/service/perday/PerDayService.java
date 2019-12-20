package com.stackroute.service.perday;

import com.stackroute.domain.fitness.FitnessPerDay;
import com.stackroute.domain.fitness.FitnessRewards;
import com.stackroute.domain.fitness.PerdayQuery;

import java.util.List;

public interface PerDayService  {
    public void save(String date,int points, String username);
    public List<FitnessPerDay> getAll();

    public List<FitnessPerDay> getTop10();

    public FitnessPerDay findUser(String username);
}
