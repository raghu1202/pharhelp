package com.example.contactmicro.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.contactmicro.entity.Review;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

	List<Review> findAllByUserName(String userName);

	List<Review> findAllByPhoneNumber (String phoneNumber);
    
}
