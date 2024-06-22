package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.UserChat;
import com.hcl.repository.ChatRepository;

@Service
public class ChatService {

	@Autowired
	ChatRepository chatRepo;

	public String insertingChat(UserChat chat) {
		chatRepo.save(chat);
		return "Message is posted successfully";
	}

	public List<UserChat> getAllChat() {
		
		return chatRepo.findAll();
	}
	
	
	
}
