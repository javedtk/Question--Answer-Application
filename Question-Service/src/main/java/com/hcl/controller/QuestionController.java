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

import com.hcl.model.Question;
import com.hcl.service.QuestionService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class QuestionController {

	@Autowired
	QuestionService questionService;


	// Post url http://localhost:8083/api/question//
	
	// insert answer through url /question
	@PostMapping("/question")
	public String createUserData(@RequestBody Question question) {
		
		return questionService.insertingUserData(question);
	}

	// find question in list fom /questions
	@GetMapping("/questions")
	public List<Question> getAllUserData() {
		
		return questionService.getAllUserData();
	}

	// find single data through url /question/id
	@GetMapping("/question/{id}")
	public Question getAllUserData(@PathVariable long id) {
		
		return questionService.getUserData(id);
	}
	
	// update the data through this url /question/id
	@PutMapping("/question/{id}")
	public String updateUserData(@PathVariable long id, @RequestBody Question question) {
		
		return questionService.updateUserData(id, question);
	}

	//delete single item through id /question/id
	@DeleteMapping("/question/{id}")
	public String deleteUserData(@PathVariable long id) {
		
		return questionService.deleteUserData(id);
	}

}
