package com.project.pharhelp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.project.pharhelp.dao.*;
import com.project.pharhelp.entity.Appointment;
import com.project.pharhelp.entity.HeaderGenerator;
import com.project.pharhelp.entity.Review;
import com.project.pharhelp.entity.User;
import com.project.pharhelp.entity.doctors;
import com.project.pharhelp.service.ReviewService;
import com.project.pharhelp.service.UserService;


@RestController
@RequestMapping("/admin")
@PreAuthorize("hasRole('Admin')")
public class AdminController
{
	@Autowired
	private UserService userService;
	@Autowired
	private UserDao userdao;
    @Autowired
    private doctorsRepository doctorsrepository;
    @Autowired
    private AppointmentRepository appointmentrepository;
    @PostMapping("/addAdmin")
    public User registerNewAdmin(@RequestBody User user) {
        return userService.registerNewAdmin(user);   
    }
    
     @GetMapping("/getAdmin")
     public List<User> getallAdmin(@RequestParam(defaultValue="admin")String role){
         return userService.getAllAdmin(role);
     }
    @GetMapping("/getusers")
    public List <User > getuser() {
        return (List<User>) userdao.findAll();
    }
    @GetMapping("/getappointment")
    public List<Appointment> getappointments(){
    	return appointmentrepository.findAll();
    }
    
    
    @GetMapping("/doctors")
    public List <doctors > getDriver() {
        return doctorsrepository.findAll();
    }
    
    @GetMapping("/doctors/{id}")
    public ResponseEntity < doctors > getdoctorsById(
        @PathVariable(value = "id") Integer doctorsId) throws ResourceNotFoundException
    {
    	doctors user = doctorsrepository.findById(doctorsId)
            .orElseThrow(() -> new ResourceNotFoundException("Driver not available :: " + doctorsId));
        return ResponseEntity.ok().body(user);
    }
    @GetMapping("/finddoctors")
    public List<doctors> getbyhospital(@RequestParam(defaultValue=" ") String hname){
		return doctorsrepository.findByhname(hname);
    	
    }

    @PostMapping("/doctors")
    public doctors createUser(@Validated @RequestBody doctors hosp)
    {
        return doctorsrepository.save(hosp);
    }

    @PutMapping("/doctors/{id}")
    public ResponseEntity < doctors > updateUser(
        @PathVariable(value = "id") Integer doctorsId,
        @Validated @RequestBody doctors userDetails) throws ResourceNotFoundException 
    {
    	doctors user = doctorsrepository.findById(doctorsId)
            .orElseThrow(() -> new ResourceNotFoundException("doctor not available :: " + doctorsId));
        user.setHname(userDetails.getHname());
        user.setLocation(userDetails.getLocation());
        user.setName(userDetails.getName());
        user.setIn(userDetails.getIn());
        user.setOut(userDetails.getOut());
        user.setSpec(userDetails.getSpec());
        final doctors updatedUser = doctorsrepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }
  
    
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

    @DeleteMapping("/deletedoctors/{did}")
	public void deletedocters(@PathVariable Integer did) {
		doctorsrepository.deleteById(did);
	}

    
    

}
