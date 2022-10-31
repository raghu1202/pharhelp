package com.project.pharhelp.entity;

import java.sql.Date;
import java.time.LocalTime;





import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;





@Entity
@Table(name="appointment")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long appid;
    
    
    private String userName;
    
    @NotNull
    @NotBlank
    @Column(name="Hospitalname")
    private String hname;
     
    @NotNull
    @NotBlank
    @Column(name="location")
    private String location;
    
    @NotNull
    @NotBlank
    @Column(name="doctorname")
    private String doctorname;
    





  @Column(name="appointment_date")
    private String appointment;
    





  @Column(name="timing")
    private String time;
    
    
    
    @Column(name="slot")
    private String slots;



public Appointment() {
    
}



   public Appointment(Long appid, String userName, @NotNull @NotBlank String hname,
            @NotNull @NotBlank String location,
            @NotNull @NotBlank String doctorname, String appointment, String time, String slots) {
        super();
        this.appid = appid;
        this.userName = userName;
        this.hname = hname;
        this.location = location;
        this.doctorname = doctorname;
        this.appointment = appointment;
        this.time = time;
        this.slots = slots;
    }





   public Long getAppid() {
        return appid;
    }





   public void setAppid(Long appid) {
        this.appid = appid;
    }





   public String getUserName() {
        return userName;
    }





   public void setUserName(String userName) {
        this.userName = userName;
    }





   public String getHname() {
        return hname;
    }





   public void setHname(String hname) {
        this.hname = hname;
    }




    public String getLocation() {
        return location;
    }





   public void setLocation(String location) {
        this.location = location;
    }





   public String getDoctorname() {
        return doctorname;
    }





   public void setDoctorname(String doctorname) {
        this.doctorname = doctorname;
    }





   public String getAppointment() {
        return appointment;
    }





   public void setAppointment(String appointment) {
        this.appointment = appointment;
    }





   public String getTime() {
        return time;
    }





   public void setTimein(String time) {
        this.time = time;
    }





   public String getSlots() {
        return slots;
    }





   public void setSlots(String slots) {
        this.slots = slots;
    }
    
    
    
    
}