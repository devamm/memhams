package com.collabera.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.collabera")
@EnableJpaRepositories(basePackages= {"com.collabera.services"})
@EntityScan(basePackages= {"com.collabera.models"})
public class MemhamsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MemhamsApplication.class, args);
	}

}
