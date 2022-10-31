package com.project.pharhelp.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.pharhelp.entity.Review;




@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

	List<Review> findAllByUserName(String userName);

	List<Review> findAllByPhoneNumber (String phoneNumber);
    
}
