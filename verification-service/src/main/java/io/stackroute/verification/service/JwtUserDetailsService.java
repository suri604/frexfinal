package io.stackroute.verification.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import io.stackroute.verification.dao.UserDao;
import io.stackroute.verification.model.DAOUser;
import io.stackroute.verification.model.UserDTO;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                Arrays.stream(user.getRoles().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList()));
	}

	public Boolean checkUserName(UserDTO user){
		DAOUser checkUser = userDao.findByUsername(user.getUsername());
		if(checkUser==null){
			System.out.println("came for user check");
			return true;
		}
		else  return false;
	}
	public Boolean checkemail(UserDTO user){
		DAOUser checkUser = userDao.findDistinctFirstByeMail(user.geteMail());
		System.out.println("came for email  g  check");
		if(checkUser==null){
			System.out.println("came for email check");
			return true;
		}
		else  return false;
	}
	
	public Boolean save(UserDTO user) {

		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setRoles(user.getRoles());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPhoneNumber(user.getPhoneNumber());
		newUser.seteMail(user.geteMail());
		userDao.save(newUser);
		return true;
	}

	public DAOUser findUser (String  username) throws UsernameNotFoundException{
		DAOUser user = userDao.findByUsername(username);
           if(user==null){
			   throw new UsernameNotFoundException("User not found with username: " + username);

		   }
		   else return user;
	}

}