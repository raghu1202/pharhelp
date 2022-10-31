package com.example.contactmicro.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.contactmicro.entity.Review;
import com.example.contactmicro.httpheader.HeaderGenerator;
import com.example.contactmicro.service.ReviewService;




@RestController
@RequestMapping("/user")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;
    
    @Autowired
    private HeaderGenerator headerGenerator;
    @CrossOrigin(origins = {"http://localhost:4200"})
    @PostMapping(value = "/review")
    private ResponseEntity<Review> addReview(@RequestBody Review review, HttpServletRequest request){
    	if(review != null) {
    		try {
    			reviewService.addReview(review);
    	        return new ResponseEntity<Review>(
    	        		review,
    	        		headerGenerator.getHeadersForSuccessPostMethod(request, review.getId()),
    	        		HttpStatus.CREATED);
    		}catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<Review>(
						headerGenerator.getHeadersForError(),
						HttpStatus.INTERNAL_SERVER_ERROR);
			}
    	}
    	return new ResponseEntity<Review>(
    			headerGenerator.getHeadersForError(),
    			HttpStatus.BAD_REQUEST);       
    }
}