package com.hcl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class AnswerApplication {

	
	// this is main part of our application start this page and run
	public static void main(String[] args) {
		SpringApplication.run(AnswerApplication.class, args);
	}

}
