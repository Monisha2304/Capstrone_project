package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Companies;
import com.example.demo.entity.UserLeads;
import com.example.demo.entity.crmleads;

@Repository
public interface crmleadsrepo extends JpaRepository<crmleads, Integer>{

	List<crmleads> findByIndustry(String industry);

	boolean existsByLemailIgnoreCase(String lemail);

}
