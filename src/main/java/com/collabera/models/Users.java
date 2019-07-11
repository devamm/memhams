package com.collabera.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="users")
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
	
	public Users(String name, String pass, boolean admin) {
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
	
	public boolean getisAdmin() {
		return this.isAdmin;
		
	}
	
	public void setisAdmin(boolean admin) {
		this.isAdmin = admin;
	}
	
	
}
