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
@Table(name="question")
public class Question {
	
	
	//primary key of current entity through @id
	@Id
	//increment of the specified column(field) primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id ;
	
	@Column(name="question")
	private String question ;
		
}
