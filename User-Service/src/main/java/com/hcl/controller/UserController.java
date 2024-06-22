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

import com.hcl.model.User;
import com.hcl.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

	@Autowired
	UserService userService;

	// insert the user data through /user url
	@PostMapping("/user")
	public String createUserData(@RequestBody User user) {
		
		return userService.insertingUserData(user);
	}

	// retrive list of user through /users url
	@GetMapping("/users")
	public List<User> getAllUserData() {
		
		return userService.getAllUserData();
	}

	// retrive user data through id
	@GetMapping("/user/{id}")
	public User getAllUserData(@PathVariable long id) {
		
		return userService.getUserData(id);
	}
	
	// update the user data through id
	@PutMapping("/user/{id}")
	public String updateUserData(@PathVariable long id, @RequestBody User user) {
		
		return userService.updateUserData(id, user);
	}

	// delete user data through id
	@DeleteMapping("/user/{id}")
	public String deleteUserData(@PathVariable long id) {
		
		return userService.deleteUserData(id);
	}

}
