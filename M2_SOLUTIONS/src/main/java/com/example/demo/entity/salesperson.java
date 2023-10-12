package com.example.demo.entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Component
@Entity
@Table(name="SalesPerson")
@SequenceGenerator(name = "second", sequenceName = "port_gen",  initialValue = 3000)
public class salesperson {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO,generator = "second")
	private int empid;
	private int cmpid;
	private String empname;
	private String adminname;
	private String teamname;
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public int getCmpid() {
		return cmpid;
	}
	public void setCmpid(int cmpid) {
		this.cmpid = cmpid;
	}
	public String getEmpname() {
		return empname;
	}
	public void setEmpname(String empname) {
		this.empname = empname;
	}
	public String getAdminname() {
		return adminname;
	}
	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}
	public String getTeamname() {
		return teamname;
	}
	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}
	
	
	
	

}
