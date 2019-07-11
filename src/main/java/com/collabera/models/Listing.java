package com.collabera.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="listings")
public class Listing {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="price")
	private int price;
	
	@Column(name="description")
	private String desc;
	
	@Column(name="imgurl")
	private String img;
	
	public Listing() {
		
	}
	
	public Listing(String name, int price, String desc, String img) {
	
		this.name = name;
		this.price = price;
		this.desc = desc;
		this.img = img;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	public String getImg() {
		return this.img;
	}
	
	public void setImg(String img) {
		this.img = img;
	}
	
	
}
	