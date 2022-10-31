package com.project.pharhelp.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.pharhelp.entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role, String> {

}
