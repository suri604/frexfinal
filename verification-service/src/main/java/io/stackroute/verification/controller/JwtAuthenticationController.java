package io.stackroute.verification.controller;

import java.util.Objects;

import io.stackroute.verification.model.DAOUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import io.stackroute.verification.service.JwtUserDetailsService;


import io.stackroute.verification.config.JwtTokenUtil;
import io.stackroute.verification.model.JwtRequest;
import io.stackroute.verification.model.JwtResponse;
import io.stackroute.verification.model.UserDTO;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		if(!userDetailsService.checkemail(user))
			return new ResponseEntity<String>("Email already exists",HttpStatus.CONFLICT);
		if(!userDetailsService.checkUserName(user))
			return new ResponseEntity<String>("Username Already exist",HttpStatus.CONFLICT);

		return ResponseEntity.ok(userDetailsService.save(user));

	}
   @PostMapping("/info")
   public ResponseEntity<?> loadUser(@RequestBody String username){
    try {
        return new ResponseEntity<DAOUser>(userDetailsService.findUser(username), HttpStatus.OK);
    }catch (Exception ex){
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
    }
   }
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}