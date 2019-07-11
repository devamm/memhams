package com.collabera.services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.collabera.models.Users;

@Repository
public interface UserJPA extends JpaRepository<Users, Integer> {
	
	public List<Users> findAll();
	
	public Users findById(int id);
	
	public <T extends Users> T save(T entity);
	
	void delete(Users U);
	
	public Users findByUsername(String username);

}
