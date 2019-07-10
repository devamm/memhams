package com.collabera.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Users {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(name="name")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="isAdmin")
	private boolean isAdmin;
	
	public Users() {
		
	}
	
	public Users(int id,String name, String pass, boolean admin) {
		this.id = id;
		this.username = name;
		this.password = pass;
		this.isAdmin = admin;
		
	}
	
	public String toString() {
		return String.format("User %d: [Name: %s, Role: %s]", this.id, this.username, this.isAdmin );
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean getRole() {
		return this.isAdmin;
		
	}
	
	public void setRole(boolean admin) {
		this.isAdmin = admin;
	}
	
	
}
