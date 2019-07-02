package com.collabera.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	
	@RequestMapping("/")
	public String getHome() {
		System.out.println("hi!!");
		return "index.html";
	}

}
