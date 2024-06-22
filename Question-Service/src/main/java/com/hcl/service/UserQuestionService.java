package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Question;
import com.hcl.model.UserQuestion;
import com.hcl.repository.QuestionRepository;
import com.hcl.repository.UserQuestionRepository;


@Service
public class UserQuestionService {

	@Autowired
	UserQuestionRepository uquestionRepository;
	
	@Autowired
	QuestionRepository questionRepository;

	
	// insert the userdata(user question)
	public String insertingUserData(UserQuestion userquestion) {
	
        userquestion.setStatus("pending");
		uquestionRepository.save(userquestion);
		return "data Inserting Successfully";
	}

	
	
	// find userdata(question) throigh id (single item)
	public List<UserQuestion> getAllUserData() {

		List<UserQuestion> list = uquestionRepository.findAll();
		return list;
	}
	

	
	// update the userdata(through id)
	public String updateUserData(long id, UserQuestion question) {

		for (UserQuestion adminData : uquestionRepository.findAll()) {

			if ((adminData.getId() == id) && question.getStatus().equalsIgnoreCase("success") ) {
				
				question.setId(id);
				question.setStatus(question.getStatus());
				uquestionRepository.save(question);
				
				Question ques = new Question();
				ques.setQuestion(question.getQuestion());
				questionRepository.save(ques);
				
				return "Data is updated ";
			}
		}
		return " Id not found";
	}
	

	
	//delete userdata through id
	public String deleteUserData(long id) {

		for (UserQuestion adminData : uquestionRepository.findAll()) {

			if (adminData.getId() == id) {
				uquestionRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id not found";
	}

	
	//get userdata through id
	public UserQuestion getUserData(long id) {

		for (UserQuestion adminData : uquestionRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
