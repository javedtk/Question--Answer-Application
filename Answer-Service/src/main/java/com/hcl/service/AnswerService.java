package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Answer;
import com.hcl.repository.AnswerRepository;


@Service
public class AnswerService {

	@Autowired
	AnswerRepository questionrRepository;

	
	// insert the data in answer section
	public String insertingUserData(Answer question) {

		questionrRepository.save(question);
		return "data Inserting Successfully";
	}

	
	// find all data through list 
	public List<Answer> getAllUserData() {

		List<Answer> list = questionrRepository.findAll();
		return list;
	}

	
	//update data through id means single item
	public String updateUserData(long id, Answer question) {

		for (Answer adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				question.setId(id);
				questionrRepository.save(question);
				return "Data is updated ";
			}
		}
		return " Id not found";
	}

	
	// delete user data through id
	public String deleteUserData(long id) {

		for (Answer adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				questionrRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id not found";
	}

	
	//get user data through id
	public Answer getUserData(long id) {

		for (Answer adminData : questionrRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
