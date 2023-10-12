package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employees;
import com.example.demo.entity.signup;

@Repository
public interface employeerepo extends JpaRepository<Employees, Integer>{


	List<Employees> findByEmpusername(String username);

	List<Employees> findByEmpemail(String username);

}
