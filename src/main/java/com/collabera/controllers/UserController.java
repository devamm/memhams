package com.collabera.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.models.Users;
import com.collabera.services.UserJPA;

@RestController
public class UserController {
	
	@Autowired
	UserJPA UserRepository;
	
	@GetMapping("/api/users")
	public List<Users> getUsers(){
		return UserRepository.findAll();
	}

}