package com.project.pharhelp.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.pharhelp.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, String> {
	User findByEmail(String email);
	List<User> findByuserFirstName(String name);
	}
