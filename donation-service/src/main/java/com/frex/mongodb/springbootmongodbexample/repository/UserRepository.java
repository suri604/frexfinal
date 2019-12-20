package com.frex.mongodb.springbootmongodbexample.repository;

import com.frex.mongodb.springbootmongodbexample.document.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<Users, Long> {
}
