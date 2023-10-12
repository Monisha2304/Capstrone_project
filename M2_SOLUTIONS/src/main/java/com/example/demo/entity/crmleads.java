package com.example.demo.entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Component
@Entity
@SequenceGenerator(name = "seventh", sequenceName = "port_gen",  initialValue = 9000)
@Table(name="crmleads")
public class crmleads {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO,generator = "seventh")
	private int leadid ;
	private String lcmpname;
	private String industry;
	private String requirement;
	private String contactname;
	private String lemail;
	private String jobposition;
	private String lphonenumber;
	private String laddress;
	private String country;
	private String website;
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
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
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
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
}
