package com.collabera.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.services.ListingJPA;
import com.collabera.models.Listing;

@RestController
public class ListingController {
	
	@Autowired
	ListingJPA ListingRepository;
	
	@GetMapping("/api/listings")
	public List<Listing> getListings(){
		return ListingRepository.findAll();
	}

}
	