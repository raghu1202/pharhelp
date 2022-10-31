package com.project.pharhelp.entity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;


@Entity
@Table(name = "doctors")
public class doctors {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer did;

  @Column (name="hospitalname")
  private String hname;
  
  @Column(name="location")
  private String location;
  
  @Column(name = "doctor_name")
  private String name;

 
  @Column(name = "specialisation")
  private String spec;

  @Column(name = "time_in")
  private String in;
  
  @Column(name ="time_out")
  private String out;

  public Integer getDid() {
		return did;
	}

	public void setDid(Integer did) {
		this.did = did;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpec() {
		return spec;
	}

	public void setSpec(String spec) {
		this.spec = spec;
	}

	public String getIn() {
		return in;
	}

	public void setIn(String in) {
		this.in = in;
	}

	public String getOut() {
		return out;
	}

	public void setOut(String out) {
		this.out = out;
	}

public doctors(Integer did, String hname, String location, String name, String spec, String in, String out) {
	super();
	this.did = did;
	this.hname = hname;
	this.location = location;
	this.name = name;
	this.spec = spec;
	this.in = in;
	this.out = out;
}
  
public doctors() {
	
}



}


  
