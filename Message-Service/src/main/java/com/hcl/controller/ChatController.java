package com.hcl.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.model.UserChat;
import com.hcl.service.ChatService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ChatController {

	@Autowired
	ChatService chatService;

	//inserting the data
	// url http://localhost:8085/api/chat
	@PostMapping("/chat")
	public String createChat(@RequestBody UserChat chat) {
		
		return chatService.insertingChat(chat);
	}

	//find all message 
	@GetMapping("/chats")
	public List<UserChat> getAllChat() {
		
		return chatService.getAllChat();
	}

}
