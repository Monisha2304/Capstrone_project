package com.example.demo.entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Component
@Entity
@Table(name="allusers")
public class Allusers {
	@Id
	private int empid;
	private int cmpid;
	private String empname;
	private String adminname;
	private String teamname;
	private int teamid;
	private String emprole;
	private String ceoname;
	private String email;
	private String username;
	private String password;
	private String phonenumber;
	public String address;
	
	public int getTeamid() {
		return teamid;
	}
	public void setTeamid(int teamid) {
		this.teamid = teamid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
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
	public String getEmprole() {
		return emprole;
	}
	public void setEmprole(String emprole) {
		this.emprole = emprole;
	}
	public String getCeoname() {
		return ceoname;
	}
	public void setCeoname(String ceoname) {
		this.ceoname = ceoname;
	}
	

}
