package com.example.contactmicro.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.contactmicro.entity.Review;
import com.example.contactmicro.httpheader.HeaderGenerator;
import com.example.contactmicro.service.ReviewService;




@RestController
public class ReviewGetController {

    @Autowired
    private ReviewService reviewService;
    
    @Autowired
    private HeaderGenerator headerGenerator;

    @GetMapping (value = "/review")
    public ResponseEntity<List<Review>> getAllReview(){
        List<Review> review =  reviewService.getAllReview();
        if(!review.isEmpty()) {
        	return new ResponseEntity<List<Review>>(
        			review,
        			headerGenerator.getHeadersForSuccessGetMethod(),
        			HttpStatus.OK);
        }
        return new ResponseEntity<List<Review>>(
        		headerGenerator.getHeadersForError(),
        		HttpStatus.NOT_FOUND);       
    }

    

    @GetMapping (value = "/review", params = "name")
    public ResponseEntity<List<Review>> getAllReviewByName(@RequestParam ("name") String userName){
        List<Review> review =  reviewService.getAllReviewByName(userName);
        if(!review.isEmpty()) {
        	return new ResponseEntity<List<Review>>(
        			review,
        			headerGenerator.getHeadersForSuccessGetMethod(),
        			HttpStatus.OK);
        }
        return 
        		new ResponseEntity<List<Review>>(
        		headerGenerator.getHeadersForError(),
        		HttpStatus.NOT_FOUND);
    }
    @GetMapping (value = "/review", params = "number")
    public ResponseEntity<List<Review>> getAllReviewByNumber(@RequestParam ("number") String phoneNumber){
        List<Review> review =  reviewService.getAllReviewByNumber(phoneNumber);
        if(!review.isEmpty()) {
        	return new ResponseEntity<List<Review>>(
        			review,
        			headerGenerator.getHeadersForSuccessGetMethod(),
        			HttpStatus.OK);
        }
        return 
        		new ResponseEntity<List<Review>>(
        		headerGenerator.getHeadersForError(),
        		HttpStatus.NOT_FOUND);
    }
}
