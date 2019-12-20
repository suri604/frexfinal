package com.frex.fitness.controller;

import com.frex.fitness.model.ActivityInfo;
import com.frex.fitness.model.CalorieInfo;
import com.frex.fitness.model.StreakInfo;
import com.stackroute.domain.fitness.FitnessRewards;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
public class KafkaProducer {
    private KafkaTemplate<String, FitnessRewards> kafkaTemplateOfActivityInfo;
    private KafkaTemplate<String, CalorieInfo> kafkaTemplateOfCalorieInfo;
    private KafkaTemplate<String, StreakInfo> kafkaTemplateOfStreakInfo;
    private static final String ACTIVITY_TOPIC = "ActivityInfo";
    private static final String CALORIE_TOPIC = "CalorieInfo";
    private static final String STREAK_TOPIC = "StreakInfo";


    @Autowired
    public KafkaProducer(
            KafkaTemplate<String, FitnessRewards> kafkaTemplateOfActivityInfo,
            KafkaTemplate<String, CalorieInfo> kafkaTemplateOfCalorieInfo,
            KafkaTemplate<String, StreakInfo> kafkaTemplateOfStreakInfo
    ) {
        this.kafkaTemplateOfActivityInfo = kafkaTemplateOfActivityInfo;
        this.kafkaTemplateOfCalorieInfo = kafkaTemplateOfCalorieInfo;
        this.kafkaTemplateOfStreakInfo = kafkaTemplateOfStreakInfo;
    }

    public void activityInfo(FitnessRewards activityInfo) {
        kafkaTemplateOfActivityInfo.send(ACTIVITY_TOPIC, activityInfo);
    }

    public void calorieTopic(CalorieInfo calorieInfo) {
        kafkaTemplateOfCalorieInfo.send(CALORIE_TOPIC, calorieInfo);

    }

    public void streakTopic(StreakInfo streakInfo) {
        kafkaTemplateOfStreakInfo.send(STREAK_TOPIC, streakInfo);
    }
}
