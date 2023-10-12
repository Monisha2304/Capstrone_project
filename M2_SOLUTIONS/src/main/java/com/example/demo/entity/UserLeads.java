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
@Table(name="userleads")
@SequenceGenerator(name = "fourth", sequenceName = "port_gen",  initialValue = 4000)
public class UserLeads {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO,generator = "fourth")
	private int leadid;
	private int empid;
	private String lcmpname;
	private String requirement;
	private String contactname;
	private String lemail;
	private String jobposition;
	private String lphonenumber;
	private String laddress;
	private String website;
	private String adminname;
	private String teamname;
	private String country;
	private String industry;
	private int lteamid;
	private String stage;
	public String getStage() {
		return stage;
	}
	public void setStage(String stage) {
		this.stage = stage;
	}
	public int getLteamid() {
		return lteamid;
	}
	public void setLteamid(int lteamid) {
		this.lteamid = lteamid;
	}
	private int leadadminid;
	public int getLeadadminid() {
		return leadadminid;
	}
	public void setLeadadminid(int leadadminid) {
		this.leadadminid = leadadminid;
	}
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	private int cmpid;
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getLeadid() {
		return leadid;
	}
	public void setLeadid(int leadid) {
		this.leadid = leadid;
	}
	public String getLcmpname() {
		return lcmpname;
	}
	public void setLcmpname(String lcmpname) {
		this.lcmpname = lcmpname;
	}
	public String getRequirement() {
		return requirement;
	}
	public void setRequirement(String requirement) {
		this.requirement = requirement;
	}
	public String getContactname() {
		return contactname;
	}
	public void setContactname(String contactname) {
		this.contactname = contactname;
	}
	public String getLemail() {
		return lemail;
	}
	public void setLemail(String lemail) {
		this.lemail = lemail;
	}
	public String getJobposition() {
		return jobposition;
	}
	public void setJobposition(String jobposition) {
		this.jobposition = jobposition;
	}
	public String getLphonenumber() {
		return lphonenumber;
	}
	public void setLphonenumber(String lphonenumber) {
		this.lphonenumber = lphonenumber;
	}
	public String getLaddress() {
		return laddress;
	}
	public void setLaddress(String laddress) {
		this.laddress = laddress;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
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
	public int getCmpid() {
		return cmpid;
	}
	public void setCmpid(int cmpid) {
		this.cmpid = cmpid;
	}
	

}
