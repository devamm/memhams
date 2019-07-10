package com.collabera.services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.collabera.models.Listing;


@Repository
public interface ListingJPA extends JpaRepository<Listing, Integer> {

	public List<Listing> findAll();
	
	public Listing findById(int id);
}
