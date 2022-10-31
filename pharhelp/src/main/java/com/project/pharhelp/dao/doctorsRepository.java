package com.project.pharhelp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.pharhelp.entity.doctors;



@Repository
public interface doctorsRepository extends JpaRepository<doctors,Integer>
{
 List<doctors> findByhname(String hname);
	

}