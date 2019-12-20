package com.stackroute.controller;

import com.stackroute.domain.fitness.FitnessPerDay;
import com.stackroute.domain.fitness.TotalFitnessRewards;
import com.stackroute.service.fitness.TotalFitnessService;
import com.stackroute.service.perday.PerDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class FitnessController {

    @Autowired
    PerDayService perDayService;

    @Autowired
    TotalFitnessService totalFitnessService;

    @GetMapping("/perday")
    List<FitnessPerDay> getPerday(){
        return perDayService.getAll();
    }

    @GetMapping("/total10per")
    List<FitnessPerDay> get10Perday(){return perDayService.getTop10();}

    @GetMapping("/totalfitness")
    List<TotalFitnessRewards> getTotal(){return totalFitnessService.getAll();}

    @GetMapping("/total10fitness")
    List<TotalFitnessRewards> getTotal10(){return totalFitnessService.getTop10();}
}
