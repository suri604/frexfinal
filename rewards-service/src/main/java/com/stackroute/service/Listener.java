package com.stackroute.service;

import com.stackroute.domain.fitness.FitnessPerDay;
import com.stackroute.domain.fitness.FitnessRewards;
import com.stackroute.domain.Rewards;
import com.stackroute.domain.Ticket;
import com.stackroute.repository.RewardsPerDayRepo;
import com.stackroute.repository.Rewardsrepo;
import com.stackroute.service.fitness.TotalFitnessService;
import com.stackroute.service.perday.PerDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Listener {
    @Autowired
    public Rewardsrepo rewardsrepo;

    @Autowired
    public PerDayService perDayService;

    @Autowired
    public TotalFitnessService totalFitnessService;

   @KafkaListener(topics = "Ticketdetails", groupId = "group_json",
           containerFactory = "kafkaListenerContainerFactory")
    public void consumeJson(Ticket ticket) {
        System.out.println("Consumed JSON Message: " + ticket);
         calculateEnv(ticket);
    }

    @KafkaListener(topics="ActivityInfo", groupId = "group_json_fitness",
            containerFactory = "kafkaListenerContainerFactoryfitness")
    public void consumeFitnessJson(FitnessRewards fitnessRewards){
        System.out.println("Consumed Fitness Json Message: " + fitnessRewards);
        calculateFit(fitnessRewards);
    }

    public void calculateEnv(Ticket ticket){
        System.out.println("came in calculation");
       Rewards newRewards= rewardsrepo.findRewardsByUsername(ticket.getUsername());
       if(newRewards==null){
           Rewards rewards= new Rewards();
           rewards.setUsername(ticket.getUsername());
           int rewardPoint=(ticket.getDistance()*12)/10;
           rewards.setXps(rewardPoint);
           rewards.setPerformance(1);
           rewards.setFreaking_mode("ENVIRONMENT");
           List<Integer> his= new ArrayList<>() ;
           his.add(rewardPoint);
           rewards.setHistory(his);

           rewardsrepo.save(rewards);
       }
       else {
           Rewards rewards= new Rewards();
           rewards.setUsername(ticket.getUsername());
           int rewardPoint = (ticket.getDistance() * 12) /10 ;
           System.out.println("before his");
           //

           int lastperformace=newRewards.getXps();
           double perform=((rewardPoint-lastperformace)/rewardPoint)*100;

           rewards.setPerformance(perform);
           rewards.setXps(rewardPoint+newRewards.getXps());
           rewards.setFreaking_mode("ENVIRONMENT");
           rewardsrepo.save(rewards);

       }
   }

    public void calculateFit(FitnessRewards fitnessRewards){

    totalFitnessService.save(fitnessRewards);

    }


}
