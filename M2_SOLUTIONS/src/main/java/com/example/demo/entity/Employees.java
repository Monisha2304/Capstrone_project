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
@Table(name="employees")
@SequenceGenerator(name = "first", sequenceName = "port_gen",  initialValue = 2000)
public class Employees {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO,generator = "first")
	private int empid;
	private int cmpid;
	private String empname;
	private String empemail;
	private String empusername;
	private String emppassword;
	private String empphonenum;
	private String emprole;
	private String address;
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
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
	public String getEmpemail() {
		return empemail;
	}
	public void setEmpemail(String empemail) {
		this.empemail = empemail;
	}
	public String getEmpusername() {
		return empusername;
	}
	public void setEmpusername(String empusername) {
		this.empusername = empusername;
	}
	public String getEmppassword() {
		return emppassword;
	}
	public void setEmppassword(String emppassword) {
		this.emppassword = emppassword;
	}
	public String getEmpphonenum() {
		return empphonenum;
	}
	public void setEmpphonenum(String empphonenum) {
		this.empphonenum = empphonenum;
	}
	public String getEmprole() {
		return emprole;
	}
	public void setEmprole(String emprole) {
		this.emprole = emprole;
	}
	
	

}
