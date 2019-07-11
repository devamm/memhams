package com.collabera.controllers;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.collabera.models.Users;
import com.collabera.services.UserJPA;

@RestController
public class UserController {
	
	@Autowired
	UserJPA UserController;
	
	@GetMapping("/api/users")
	public List<Users> getAllUsers(){
		return UserController.findAll();
	}
	
	@PostMapping("/api/users")
	public ResponseEntity<HttpStatus> postUser(@RequestBody Users user){
		user.setisAdmin(false);
		UserController.save(user);
		return ResponseEntity.ok(HttpStatus.CREATED);
		

	}
	
	@GetMapping("/api/users/{id}")
	public ResponseEntity<Users> getUser(@PathVariable String id) throws NumberFormatException {
		int uID = Integer.parseInt(id);
		Users user = UserController.findById(uID);
		if(user == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		} else {
			//return ResponseEntity.ok(user);
			return ResponseEntity.status(HttpStatus.OK).body(user);
		}
	}
	
	@DeleteMapping("/api/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable String id){
		int uID = Integer.parseInt(id);
		Users user = UserController.findById(uID);
		if(user == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Found");	
		} else {
			if(uID == 1) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Forbidden");
			}
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");
		}
		
	}
} 
