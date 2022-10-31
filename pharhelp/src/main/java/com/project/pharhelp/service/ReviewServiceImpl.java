package com.project.pharhelp.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.pharhelp.dao.ReviewRepository;
import com.project.pharhelp.entity.Review;

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