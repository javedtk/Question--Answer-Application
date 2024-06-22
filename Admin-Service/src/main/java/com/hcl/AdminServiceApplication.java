package com.hcl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class AdminServiceApplication {

	
	// this is main part of our admin-services application
	public static void main(String[] args) {
		SpringApplication.run(AdminServiceApplication.class, args);
	}

}
