package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Allusers;
import com.example.demo.entity.teams;



@Repository
public interface teamsrepo extends JpaRepository<teams, Integer>{

	List<teams> findByCmpid(int lcid);

	List<teams> findByEmpid(int lid);

	

	List<teams> findByEmpidAndCmpid(int lid, int lcid);

	List<teams> findByAdminnameAndCmpid(String ladminname, int lcid);

}
