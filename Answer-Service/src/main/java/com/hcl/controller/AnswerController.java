package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.model.Answer;
import com.hcl.service.AnswerService;

@RestController
//RequestMapping(/api)start with this url 
@RequestMapping("/api")
@CrossOrigin("*")
public class AnswerController {

	@Autowired
	AnswerService questionService;

	// insert the data(answer) through postmapping in in answer section == /answer url
	
	@PostMapping("/answer")
	public String createUserData(@RequestBody Answer answer) {
		
		return questionService.insertingUserData(answer);
	}

	// find all answer in the list fom = /answer
	@GetMapping("/answers")
	public List<Answer> getAllUserData() {
		
		return questionService.getAllUserData();
	}

	//find answer through id single data fom = /answer
	@GetMapping("/answer/{id}")
	public Answer getAllUserData(@PathVariable long id) {
		
		return questionService.getUserData(id);
	}
	
	//updating the data though by id
	@PutMapping("/answer/{id}")
	public String updateUserData(@PathVariable long id, @RequestBody Answer answer) {
		
		return questionService.updateUserData(id, answer);
	}

	// delete the data through id single item /answer/id
	@DeleteMapping("/answer/{id}")
	public String deleteUserData(@PathVariable long id) {
		
		return questionService.deleteUserData(id);
	}

}
