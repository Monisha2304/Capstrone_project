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
@Table(name="signup")
@SequenceGenerator(name = "third", sequenceName = "port_gen",  initialValue = 100)
public class signup {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO,generator = "third")
	private int cid;
	private String cname;
	private String cemail;
	private String cphone;
	private String cusername;
	private String cpassword;
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getCemail() {
		return cemail;
	}
	public void setCemail(String cemail) {
		this.cemail = cemail;
	}
	public String getCphone() {
		return cphone;
	}
	public void setCphone(String cphone) {
		this.cphone = cphone;
	}
	public String getCusername() {
		return cusername;
	}
	public void setCusername(String cusername) {
		this.cusername = cusername;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	

}
