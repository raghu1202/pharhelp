package com.example.contactmicro.service;
import java.util.List;

import com.example.contactmicro.entity.Review;


public interface ReviewService {
    public List<Review> getAllReview();
    
    public List<Review> getAllReviewByName(String userName);
    public List<Review> getAllReviewByNumber(String phoneNumber);
    public Review addReview(Review review);
    
}