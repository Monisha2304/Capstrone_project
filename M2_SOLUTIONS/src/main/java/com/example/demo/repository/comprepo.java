package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Allusers;
import com.example.demo.entity.Companies;

@Repository
public interface comprepo extends JpaRepository<Companies, Integer>{




	List<Companies> findByCmpname(String cmpname);

	List<Companies> findByCeoid(int i);

	List<Companies> findByCmpid(int lcid);
}
