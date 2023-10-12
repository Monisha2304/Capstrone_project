package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Allusers;
import com.example.demo.entity.Companies;
import com.example.demo.entity.salesperson;

@Repository
public interface allusersrepo extends JpaRepository<Allusers, Integer>{

	List<Allusers> findByEmail(String cemail);

	List<Allusers> findByUsername(String cusername);

	List<Allusers> findByAdminname(String credential);

	

	List<Allusers> findByCmpid(int id);

	List<Allusers> findByCmpidAndEmprole(int lcid, String string);

	

	List<Allusers> findByEmpid(int lmemberid);

	List<Allusers> findByTeamname(String lteam);

	List<Allusers> findByTeamid(int lteamid);

	

}
