package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employees;
import com.example.demo.entity.salesperson;

@Repository
public interface salesrepo extends JpaRepository<salesperson, Integer>{

}
