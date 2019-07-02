package com.collabera.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.collabera")
public class MemhamsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MemhamsApplication.class, args);
	}

}
