package com.collabera.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.services.ListingJPA;
import com.collabera.models.Listing;

@RestController
public class ListingController {
	
	@Autowired
	ListingJPA ListService;
	
	@GetMapping("/api/listings")
	public List<Listing> getListings(){
		return ListService.findAll();
	}
	
	@GetMapping("/api/listings/{id}")
	public ResponseEntity<Listing> getListing(@PathVariable String id) {
		int listID = Integer.parseInt(id);
		Listing listing = ListService.findById(listID);
		if(listing == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		} else{
			return ResponseEntity.ok(listing);
		}
	}
	
	@PostMapping("/api/listings")
	public ResponseEntity<String> postListing(@RequestBody Listing listing){
		if (listing.getImg().equals("default")) {
			//set some default image url here
			listing.setImg("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/A_blank_black_picture.jpg/1536px-A_blank_black_picture.jpg");
		}
		ListService.save(listing);
		return ResponseEntity.status(HttpStatus.CREATED).body("Created");
	}
	
	@PutMapping("/api/listings/{id}")
	public ResponseEntity<String> editListing(@PathVariable String id, @RequestBody Listing edited){
		int listID = Integer.parseInt(id);
		Listing listing= ListService.findById(listID);
		if(listing == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		} else{
			listing.setDesc(edited.getDesc());
			listing.setName(edited.getName());
			listing.setPrice(edited.getPrice());
			listing.setImg(edited.getImg());
			ListService.save(listing);
			return ResponseEntity.ok("Updated");
		}
	}
	
	@DeleteMapping("/api/listings/{id}")
	public ResponseEntity<String> deleteListing(@PathVariable String id){
		int listID = Integer.parseInt(id);
		Listing list = ListService.findById(listID);
		if(list == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not Found");
		} else {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");
		}
	}
	 

}
	