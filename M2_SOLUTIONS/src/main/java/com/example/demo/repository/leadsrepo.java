package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Companies;
import com.example.demo.entity.UserLeads;
import com.example.demo.entity.crmleads;
@Repository
public interface leadsrepo extends JpaRepository<UserLeads, Integer>{

	void save(crmleads crmleads);

	List<UserLeads> findByCmpid(int lcid);

	List<UserLeads> findByEmpid(int lid);

	UserLeads findByLeadid(int leadid);

	List<UserLeads> findByLeadadminid(int leadadminid);

	List<UserLeads> findByLteamid(int lteamid);

	boolean existsByLemailIgnoreCase(String lemail);

	List<UserLeads> findByLemail(String lemail);

	
}
