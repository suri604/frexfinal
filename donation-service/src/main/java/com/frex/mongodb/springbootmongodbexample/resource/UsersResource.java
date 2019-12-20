package com.frex.mongodb.springbootmongodbexample.resource;

import com.frex.mongodb.springbootmongodbexample.document.Users;
import com.frex.mongodb.springbootmongodbexample.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/rest/users")
public class UsersResource {
    private UserRepository userRepository;

    public UsersResource(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/all")
    public List<Users> getAll(){
    return userRepository.findAll();
    }
    @PostMapping("/donate")
    public ResponseEntity<?> saveUser(@RequestBody Users users){
        ResponseEntity responseEntity;

            userRepository.save(users);
            responseEntity = new ResponseEntity<String>("Successfully Created", HttpStatus.CREATED);


        return responseEntity;
    }
}
