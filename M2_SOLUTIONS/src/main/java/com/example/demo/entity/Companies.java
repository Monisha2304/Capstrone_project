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
@SequenceGenerator(name = "port_gen", sequenceName = "port_gen",  initialValue = 1000)
@Table(name="companies")
public class Companies {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO,generator = "port_gen")
	private int cmpid;
	private int ceoid;
	private String ceoname;
	private String cmpname;
	private String cmpphonenumber;
	private String cmpemail;
	private String cmpaddress;
	private String cmpsize;
	private String country;
	
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCeoname() {
		return ceoname;
	}
	public void setCeoname(String ceoname) {
		this.ceoname = ceoname;
	}
	public int getCmpid() {
		return cmpid;
	}
	public void setCmpid(int cmpid) {
		this.cmpid = cmpid;
	}
	public int getCeoid() {
		return ceoid;
	}
	public void setCeoid(int ceoid) {
		this.ceoid = ceoid;
	}
	public String getCmpname() {
		return cmpname;
	}
	public void setCmpname(String cmpname) {
		this.cmpname = cmpname;
	}
	public String getCmpphonenumber() {
		return cmpphonenumber;
	}
	public void setCmpphonenumber(String cmpphonenumber) {
		this.cmpphonenumber = cmpphonenumber;
	}
	public String getCmpemail() {
		return cmpemail;
	}
	public void setCmpemail(String cmpemail) {
		this.cmpemail = cmpemail;
	}
	public String getCmpaddress() {
		return cmpaddress;
	}
	public void setCmpaddress(String cmpaddress) {
		this.cmpaddress = cmpaddress;
	}
	public String getCmpsize() {
		return cmpsize;
	}
	public void setCmpsize(String cmpsize) {
		this.cmpsize = cmpsize;
	}
	
	

}

