package com.collabera.models;

public class OutputMessage {

	private String text;
	private String from;
	private String time;
	
	
	public OutputMessage() {
		
	}
	
	public OutputMessage(String text, String from, String time) {
		this.text = text;
		this.from = from;
		this.time = time;
	}

	public String getText() {
		return text;
	}

	public String getFrom() {
		return from;
	}
	
	public String getTime() {
		return time;
	}
}