package com.stackroute.service.fitness;

import com.stackroute.domain.fitness.FitnessRewards;
import com.stackroute.domain.fitness.TotalFitnessRewards;

import java.util.List;

public interface TotalFitnessService {
    public void save(FitnessRewards fitnessRewards);

    public List<TotalFitnessRewards> getAll();

    public List<TotalFitnessRewards> getTop10();
}
