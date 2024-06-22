package com.hcl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.model.UserChat;

@Repository
public interface ChatRepository extends JpaRepository<UserChat, Long> {

}
