package com.collabera.models;

public class Message {
	private String text;
	private String from;
	
	
	public Message() {
		
	}
	
	public Message(String text, String from) {
		this.text = text;
		this.from = from;
	}

	public String getText() {
		return text;
	}

	public String getFrom() {
		return from;
	}
	
	
	
	
	
	
}
