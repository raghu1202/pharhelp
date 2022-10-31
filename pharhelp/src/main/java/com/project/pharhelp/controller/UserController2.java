package com.project.pharhelp.controller;



import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.pharhelp.dao.AppointmentRepository;
import com.project.pharhelp.dao.UserDao;
import com.project.pharhelp.dao.doctorsRepository;
import com.project.pharhelp.entity.Appointment;
import com.project.pharhelp.entity.User;
import com.project.pharhelp.entity.doctors;
import com.project.pharhelp.service.UserService;





@RestController
@RequestMapping("/user")
@PreAuthorize("hasRole('User')")
public class UserController2 {
	//@Autowired
	//private AppointmentServiceImplementation appointmentServiceImplementation;
	@Autowired
	private AppointmentRepository appointmentRepository;
	@Autowired
	private UserService userservice;
	 @Autowired
	    private doctorsRepository doctorsrepository;
	 @Autowired
	 private UserDao userdao;

	
	@GetMapping("/userdetails")
	public Optional<User> userdetails(@RequestParam(defaultValue=" ")String userName) throws ResourceNotFoundException{
	return userservice.findByusername(userName);
	}
	
	@PostMapping("/save-app")
	public Appointment saveEmploye( @RequestBody Appointment obj)throws ResourceNotFoundException {
		return appointmentRepository.save(obj);
	}
	@GetMapping("/all")
	public List<Appointment> getall() throws ResourceNotFoundException {
		return appointmentRepository.findAll();
	}

	@GetMapping("/bookinghistory")
	public List<Appointment> gethistory(@RequestParam(defaultValue=" ") String username) {
		
	return appointmentRepository.findByuserName(username);
	}
	
	 @PutMapping("/password/{username}")
	    public User updateUser(
	    @PathVariable(value = "username") String userName,
	    @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
	         User user = userdao.findById(userName)
	          .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userName));
	  
	        return userservice.save(user);
	   }
	
	 // @GetMapping("/doctors")
	  //  public List <doctors > getDriver() {
	  //      return doctorsrepository.findAll();
	  //  }
	    
	   
	   // @GetMapping("/doctors/{id}")
	   // public ResponseEntity < doctors > getdoctorsById(
	   //     @PathVariable(value = "id") Integer doctorsId) throws ResourceNotFoundException
	  //  {
	  //  	doctors user = doctorsrepository.findById(doctorsId)
	  //          .orElseThrow(() -> new ResourceNotFoundException("Driver not available :: " + doctorsId));
	   //     return ResponseEntity.ok().body(user);
	  //  }
	  //  @GetMapping("/finddoctors")
	  //  public List<doctors> getbyhospital(@RequestParam(defaultValue=" ") String hname){
		//	return doctorsrepository.findByhname(hname);
	    	
	  //  }
	 @DeleteMapping("/deletebooking/{id}")
		public void deletebooking(@PathVariable Long id ) {
			appointmentRepository.deleteById(id);
		}
	
	
}