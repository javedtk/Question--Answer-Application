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

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id ;
	//name column
	@Column(name="name")
	private String name ;
	//username column
	@Column(name="username")
	private String username ;
	//email column
	@Column(name="email")
	private String email ;
	//phone column
	@Column(name="phone")
	private String phone;
	//password column
	@Column(name="password")
	private String password ;
		
}
