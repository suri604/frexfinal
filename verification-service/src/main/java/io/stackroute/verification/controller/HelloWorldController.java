package io.stackroute.verification.controller;

import io.stackroute.verification.dao.UserDao;
import io.stackroute.verification.model.DAOUser;
import io.stackroute.verification.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    UserDao userDao;

	@RequestMapping({ "/hello" })
	public String firstPage() {
		return "Hello World";
	}

	@GetMapping("/user")
    public String user(){
       return "name";
    }




}