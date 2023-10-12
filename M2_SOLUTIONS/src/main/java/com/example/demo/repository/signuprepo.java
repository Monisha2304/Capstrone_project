package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.entity.signup;

@Repository
public interface signuprepo extends JpaRepository<signup, String> {
	List<signup> findAll();

	List<signup> findByCemail(String string);

	List<signup> findByCusername(String string);

	
	  
}
