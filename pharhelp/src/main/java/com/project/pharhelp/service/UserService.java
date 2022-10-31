package com.project.pharhelp.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.pharhelp.dao.AppointmentRepository;
import com.project.pharhelp.dao.RoleDao;
import com.project.pharhelp.dao.UserDao;
import com.project.pharhelp.dao.doctorsRepository;
import com.project.pharhelp.entity.Role;
import com.project.pharhelp.entity.User;
import com.project.pharhelp.entity.doctors;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;
  

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleDao.save(userRole);

        User adminUser = new User();
        adminUser.setUserName("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
    	adminUser.setEmail("admin@gmail.com");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);
        
        
        
        

//        User user = new User();
//        user.setUserName("raj123");
//        user.setUserPassword(getEncodedPassword("raj@123"));
//        user.setUserFirstName("raj");
//        user.setUserLastName("sharma");
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userDao.save(user);
    }

    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    }
    public User registerNewAdmin(User user) {
    	Role role=roleDao.findById("Admin").get();
    	Set<Role> adminRoles = new HashSet<>();
    	adminRoles.add(role);
    	user.setRole(adminRoles);
    	user.setUserFirstName("admin");
    	user.setEmail("admin@gmail.com");
    	user.setUserPassword(getEncodedPassword(user.getUserPassword()));
    	return userDao.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
    public User findByEmail(String email) {
		
		
		return userDao.findByEmail(email);
		
	}
 public Optional<User> findByusername(String userName) {
		
		
		return userDao.findById(userName);
		
	}

	
	public List<User> getAllAdmin(String name ){
        return userDao.findByuserFirstName(name);
    }

	public User save(User user) {
				 user.setUserName(user.getUserName());
	        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
		return userDao.save(user);
	}


	
}

	
