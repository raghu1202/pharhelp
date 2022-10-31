package com.project.pharhelp.entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import java.util.Set;

@Entity
public class User {



	@Id
    private String userName;
    private String userFirstName;
    private String userLastName;
    private String userPassword;
  
	@Email(message = "Please provide a valid e-mail")
	@NotEmpty(message = "Please provide an e-mail")
	private String email;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
    private Set<Role> role;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }
    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public User(String userName, String userFirstName, String userLastName, String userPassword, String email,
			Set<Role> role) {
		super();
		this.userName = userName;
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userPassword = userPassword;
		this.email = email;
		this.role = role;
	}

	public User() {
	
	}
	
}
