package com.example.demo;

import java.io.File;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.UserLeads;

public class tracking {
	private String loggedin_person;
	private String lrole;
	private int lid;
	private int lcid;
	private String lcname;
	private String lteam;
	private String lname;
	private String ldatabase;
	private String ladminname;
	private String[] lmembers;
	private int lmemberid;
	private String industry;
	private UserLeads useleads;
	private int lsalespersonid;
	private int leadadminid;
	private String leadadminname;
	private int lteamid;
	private String teammembername;
	private File file;
	public File getFile() {
		return file;
	}
	public void setFile(File file) {
		this.file = file;
	}
	public String getTeammembername() {
		return teammembername;
	}
	public void setTeammembername(String teammembername) {
		this.teammembername = teammembername;
	}
	public int getLteamid() {
		return lteamid;
	}
	public void setLteamid(int lteamid) {
		this.lteamid = lteamid;
	}
	public String getLeadadminname() {
		return leadadminname;
	}
	public void setLeadadminname(String leadadminname) {
		this.leadadminname = leadadminname;
	}
	public int getLeadadminid() {
		return leadadminid;
	}
	public void setLeadadminid(int leadadminid) {
		this.leadadminid = leadadminid;
	}
	public int getLsalespersonid() {
		return lsalespersonid;
	}
	public void setLsalespersonid(int lsalespersonid) {
		this.lsalespersonid = lsalespersonid;
	}
	public UserLeads getUseleads() {
		return useleads;
	}
	public void setUseleads(UserLeads useleads) {
		this.useleads = useleads;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public int getLmemberid() {
		return lmemberid;
	}
	public void setLmemberid(int lmemberid) {
		this.lmemberid = lmemberid;
	}
	public String[] getLmembers() {
		return lmembers;
	}
	public void setLmembers(String[] lmembers) {
		this.lmembers = lmembers;
	}
	public String getLadminname() {
		return ladminname;
	}
	public void setLadminname(String ladminname) {
		this.ladminname = ladminname;
	}
	public String getLdatabase() {
		return ldatabase;
	}
	public void setLdatabase(String ldatabase) {
		this.ldatabase = ldatabase;
	}
	public String getLoggedin_person() {
		return loggedin_person;
	}
	public void setLoggedin_person(String loggedin_person) {
		this.loggedin_person = loggedin_person;
	}
	public String getLrole() {
		return lrole;
	}
	public void setLrole(String lrole) {
		this.lrole = lrole;
	}
	public int getLid() {
		return lid;
	}
	public void setLid(int lid) {
		this.lid = lid;
	}
	public int getLcid() {
		return lcid;
	}
	public void setLcid(int lcid) {
		this.lcid = lcid;
	}
	public String getLcname() {
		return lcname;
	}
	public void setLcname(String lcname) {
		this.lcname = lcname;
	}
	public String getLteam() {
		return lteam;
	}
	public void setLteam(String lteam) {
		this.lteam = lteam;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
}
