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

import com.hcl.model.UserQuestion;
import com.hcl.service.UserQuestionService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserQuestionController {

	@Autowired
	UserQuestionService uquestionService;

	// post user question /userquestion url
	@PostMapping("/userquestion")
	public String createUserData(@RequestBody UserQuestion userquestion) {
		
		return uquestionService.insertingUserData(userquestion);
	}

	// find all userquestions- through /userquestions in the list fom
	@GetMapping("/userquestions")
	public List<UserQuestion> getAllUserData() {
		
		return uquestionService.getAllUserData();
	}

	// find single userquestion through this url /userquestion/id
	@GetMapping("/userquestion/{id}")
	public UserQuestion	 getAllUserData(@PathVariable long id) {
		
		return uquestionService.getUserData(id);
	}
	
	// update userquestion through id /userquestion/id single userquestion
	@PutMapping("/userquestion/{id}")
	public String updateUserData(@PathVariable long id, @RequestBody UserQuestion userquestion) {
		
		return uquestionService.updateUserData(id, userquestion);
	}

	// delete userquestion /question/id only single userquestion
	@DeleteMapping("/userquestion/{id}")
	public String deleteUserData(@PathVariable long id) {
		
		return uquestionService.deleteUserData(id);
	}

}
