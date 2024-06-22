package com.hcl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.model.Answer;

@Repository

//JpaRepository to prefom all predefind curd operation and user defiend also

public interface AnswerRepository extends JpaRepository<Answer, Long> {

}
