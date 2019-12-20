package com.frex.mongodb.springbootmongodbexample.config;

import com.frex.mongodb.springbootmongodbexample.document.Users;
import com.frex.mongodb.springbootmongodbexample.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = UserRepository.class)
@Configuration
public class MongoDBConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository){
return strings ->
    userRepository.save(new Users("Deepak Janmanchi", "deepakjanmanchi@gmail.com", "9441845312", 25000, "India"));


  }
}
