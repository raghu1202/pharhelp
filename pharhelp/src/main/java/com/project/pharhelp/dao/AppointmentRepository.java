package com.project.pharhelp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.pharhelp.entity.Appointment;




@Repository("appointmentRepository")
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

	List<Appointment> findByuserName(String username);
	
}	