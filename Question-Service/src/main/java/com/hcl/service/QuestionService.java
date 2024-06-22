package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Question;
import com.hcl.repository.QuestionRepository;


@Service
public class QuestionService {

	@Autowired
	QuestionRepository questionrRepository;

	
	// insert userdata(question)
	public String insertingUserData(Question question) {

		questionrRepository.save(question);
		return "data Inserting Successfully";
	}

	
	//find all userdata(question)in the list way
	public List<Question> getAllUserData() {

		List<Question> list = questionrRepository.findAll();
		return list;
	}

	
	//update user data(question) through id (single data)
	public String updateUserData(long id, Question question) {

		for (Question adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				question.setId(id);
				questionrRepository.save(question);
				return "Data is updated ";
			}
		}
		return " Id not found";
	}

	
	// delete user data(question) through id
	public String deleteUserData(long id) {

		for (Question adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				questionrRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id not found";
	}

	
	// get user data through id
	public Question getUserData(long id) {

		for (Question adminData : questionrRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
