package com.hcl.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data   //annotation to generate the getters and setters
@Entity  //annotation to map the User pojo class with mysql database
@AllArgsConstructor  //annotation to generate all arguements constructor
@NoArgsConstructor //annotation to generate default constructor
@Table(name="chat")  //defining the table name
//User pojo class
public class UserChat {
	
	@Id  //defining the primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //making primary key as auto increment
	private long id ;
	
	@Column(name="username")    //@Column is used to define the column names of the table
	private String username ;
	
	@Column(name="message")
	private String message ;
	
	@Column(name="image")
	private String image ;
	
		
}

