package com.example.contactmicro.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.contactmicro.entity.Review;
import com.example.contactmicro.repository.ReviewRepository;

import java.util.List;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<Review> getAllReview() {
        return reviewRepository.findAll();
    }

 

    @Override
    public List<Review> getAllReviewByName(String userName) {
        return reviewRepository.findAllByUserName(userName);
    }
    

    @Override
    public List<Review> getAllReviewByNumber (String phoneNumber) {
        return reviewRepository.findAllByPhoneNumber(phoneNumber);
    }

    @Override
    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    
}