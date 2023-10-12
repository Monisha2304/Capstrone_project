package com.example.demo.controller;

import java.io.*;
import java.util.List;
import org.apache.*;
import java.sql.Date;

import java.util.List;

 
//
import org.apache.commons.io.FileUtils;
//
//import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.message;
import com.example.demo.tracking;
import com.example.demo.xltodb;
import com.example.demo.entity.Allusers;
import com.example.demo.entity.Companies;
import com.example.demo.entity.Employees;
import com.example.demo.entity.UserLeads;
import com.example.demo.entity.crmleads;
import com.example.demo.entity.salesperson;
import com.example.demo.entity.signup;
import com.example.demo.entity.teams;
import com.example.demo.repository.allusersrepo;
import com.example.demo.repository.comprepo;
import com.example.demo.repository.crmleadsrepo;
import com.example.demo.repository.employeerepo;
import com.example.demo.repository.leadsrepo;
import com.example.demo.repository.salesrepo;
import com.example.demo.repository.signuprepo;
import com.example.demo.repository.teamsrepo;

import jakarta.servlet.ServletContext;

import java.io.File;

@RestController  
@CrossOrigin

 
public class controller {
	public static List<UserLeads> uselead;
	@Autowired
    private signuprepo reps;
	@Autowired 
	private employeerepo emprepo;
	@Autowired
	private salesrepo salerepo;
	@Autowired
	private allusersrepo allrep;
	@Autowired
	private comprepo cmprep;
	@Autowired
	private leadsrepo leadrep;
	@Autowired
	private teamsrepo teamrep;
	@Autowired
	private crmleadsrepo cleadrep;
	@Autowired ServletContext context;
	
    @PostMapping("/getcompany")
    public List<Companies> getcomapnies(@RequestBody tracking credential) {
    	System.out.println("hii");
    	
    	return cmprep.findByCeoid(credential.getLid());
    }

    @PostMapping("/connecttoadmin")
    public List<Allusers> adminconnect(@RequestBody tracking credential) {
    	List<Companies> l=cmprep.findByCmpname(credential.getLdatabase());
    	
    	int id=-1;
    	if(l.size()>0) {
    		
    		id=l.get(0).getCmpid();
    		System.out.println(id);
    	}
    	System.out.println(credential.getLcid()+"hello");
    	return allrep.findByCmpid(id);   // changed from id
    
    }
    @PostMapping("/getleads")
    public List<UserLeads> getleads(@RequestBody tracking credential) {
    	
    	return leadrep.findByCmpid(credential.getLcid());
    
    }
    @PostMapping("/changeadmin")
    public UserLeads changeadmin(@RequestBody UserLeads credential) {
    	UserLeads l=leadrep.findByLeadid(credential.getLeadid());
    	l.setAdminname(null);
    	l.setLeadadminid(credential.getLeadadminid());
    	l.setTeamname(null);
    	return leadrep.save(l);
    
    }
    @PostMapping("/imports")
    public void importleads(@RequestBody tracking credential) {
    	
        for(int i=0;i<uselead.size();i++) {
        	UserLeads c=uselead.get(i);
            c.setAdminname(credential.getLadminname());
            c.setLeadadminid(credential.getLeadadminid());
            c.setCmpid(credential.getLcid());
            c.setEmpid(credential.getLid());
            c.setStage("New");
        	boolean isExists = leadrep.existsByLemailIgnoreCase(c.getLemail());
            	if (!isExists) {
            			leadrep.save(c);
            	}
            	else {
            		List<UserLeads> l1=leadrep.findByLemail(c.getLemail());
            		int y=0;
            		for(int j=0;j<l1.size();j++) {
            			if(l1.get(j).getCmpid()==c.getCmpid()) {
            				y=1;
            			}
            		}
            		if(y==0) {
            			leadrep.save(c);
            		}
            	}
        }
    	
    
    }
    @PostMapping("/saveFile")

    public ResponseEntity<String> saveFile(@RequestParam("file") MultipartFile file) throws IOException

    {

//    	file f = new ObjectMapper().readValue("hi",file.class);

//    	f.setCreatedDate(new Date(0));

//    	file dbf = null;

    	

    	boolean isExist = new File(context.getRealPath("/Files")).exists();

    	if (!isExist)

    	{

    		new File(context.getRealPath("/Files")).mkdir();

    	}

    	String filename = file.getOriginalFilename();

    	String modifiedfilename = FilenameUtils.getBaseName(filename)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename);

    	File file1 = new File(context.getRealPath("/Files/"+File.separator+modifiedfilename));

    	try {

    		FileUtils.writeByteArrayToFile(file1, file.getBytes());
        	String filename1=context.getRealPath("/Files/"+File.separator+modifiedfilename);
        	xltodb test = new xltodb();
            test.setInputFile(filename1);
            List<UserLeads> l=test.read();
            System.out.println(l);
            uselead=l;
//            for(int i=0;i<l.size();i++) {
//            	crmleads c=l.get(i);
//            
//            	boolean isExists = cleadrep.existsByLemailIgnoreCase(c.getLemail());
//                if (!isExists) {
//            	cleadrep.save(l.get(i));
//                }
//            }

    	}

    	catch(Exception e)

    	{

    		e.printStackTrace();

    	}

//    	f.setFileName(modifiedfilename);

		try {

//			dbf = fileService.save(f);

		} catch (Exception e) {

			// TODO Auto-generated catch block

			e.printStackTrace();

		}

//    	if (dbf!=null)

//    	{

//    		

//    		return new ResponseEntity<Responce>(new Responce("saved"),HttpStatus.OK);

//    	}

//    	else

//    	{

//    		return new ResponseEntity<Responce>(new Responce("not saved"),HttpStatus.BAD_REQUEST);

//    	}

		return null;

    }
   

    @PostMapping("/savePhoto")

        public ResponseEntity<String> savePhoto(@RequestParam("file") MultipartFile file) throws IOException

        {

//        	file f = new ObjectMapper().readValue("hi",file.class);

//        	f.setCreatedDate(new Date(0));

//        	file dbf = null;

        	

        	boolean isExist = new File(context.getRealPath("/Photos")).exists();

        	if (!isExist)

        	{

        		new File(context.getRealPath("/Photos")).mkdir();

        	}

        	String filename = file.getOriginalFilename();

        	String modifiedfilename = FilenameUtils.getBaseName(filename)+"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(filename);

        	File file1 = new File(context.getRealPath("/Photos/"+File.separator+modifiedfilename));

        	try {

        		FileUtils.writeByteArrayToFile(file1, file.getBytes());

        	}

        	catch(Exception e)

        	{

        		e.printStackTrace();

        	}

//        	f.setFileName(modifiedfilename);

    		try {

//    			dbf = fileService.save(f);

    		} catch (Exception e) {

    			// TODO Auto-generated catch block

    			e.printStackTrace();

    		}

//        	if (dbf!=null)

//        	{

//        		

//        		return new ResponseEntity<Responce>(new Responce("saved"),HttpStatus.OK);

//        	}

//        	else

//        	{

//        		return new ResponseEntity<Responce>(new Responce("not saved"),HttpStatus.BAD_REQUEST);

//        	}

    		return null;

        }
    @PostMapping("/changeteamid")
    public UserLeads changeteamid(@RequestBody UserLeads credential) {
    	UserLeads l=leadrep.findByLeadid(credential.getLeadid());
    	l.setTeamname(null);
    	l.setLteamid(0);
    	return leadrep.save(l);
    
    }
    @PostMapping("/addthelead")
    public UserLeads addthelead(@RequestBody UserLeads credential) {
    	UserLeads l=leadrep.findByLeadid(credential.getLeadid());
    	l.setAdminname(credential.getAdminname());
    	l.setLeadadminid(credential.getLeadadminid());
    	System.out.println(credential.getLeadadminid());
    	l.setTeamname(credential.getTeamname());
    	l.setLteamid(credential.getLteamid());
    	System.out.println(credential.getAdminname()+"hiii");
    	return leadrep.save(l);
    
    }
    @PostMapping("/getuserdata")
    public Allusers getuserdata(@RequestBody tracking credential) {
    	List<Allusers> l=allrep.findByEmpid(credential.getLmemberid());
    	
    	return l.get(0);
    
    }
    @PostMapping("/getmemberdetail")
    public List<Allusers> getmemberdetail(@RequestBody tracking credential) {
    	List<Allusers> l=allrep.findByTeamid(credential.getLteamid());
    	
    	return l;
    
    }
    @PostMapping("/gettheleads")
    public List<UserLeads> gettheleads(@RequestBody tracking credential) {
    	System.out.println(credential.getLeadadminid());
    	
    	return leadrep.findByLeadadminid(credential.getLeadadminid());
    
    }
    @PostMapping("/gettheleadsforteams")
    public List<UserLeads> gettheleadsteams(@RequestBody tracking credential) {
    	System.out.println(credential.getLteamid()+"monisha here");
    	
    	return leadrep.findByLteamid(credential.getLteamid());
    
    }
    @PostMapping("/addadmin")
    public message aadminadd(@RequestBody Allusers credential) {
    	message m=new message();
    	
    	List<Allusers> l =allrep.findByUsername(credential.getUsername());
    	List<Employees> l1=emprepo.findByEmpusername(credential.getUsername());
    	List<Allusers> l2 =allrep.findByEmail(credential.getEmail());
    	List<Employees> l3=emprepo.findByEmpemail(credential.getEmail());
    	if(l.size()==0&&l1.size()==0&&l2.size()==0&&l3.size()==0) {
    		
    		Employees e=new Employees();
    		e.setAddress(credential.getAddress());
    		e.setCmpid(credential.getCmpid());
    		e.setEmpemail(credential.getEmail());
    		
    		e.setEmpname(credential.getEmpname());
    		e.setEmppassword(credential.getPassword());
    		e.setEmpphonenum(credential.getPhonenumber());
    		e.setEmprole(credential.getEmprole());
    		e.setEmpusername(credential.getUsername());
    		Employees e1=emprepo.save(e);
    		credential.setCmpid(e1.getCmpid());
    		credential.setEmpid(e1.getEmpid());
    		allrep.save(credential);
    		m.setMess("Admin created successfully");
    		
    		m.setResult(true);
    	}
    	else {
    		m.setMess("Admin already available");
    		m.setResult(false);
    	}
    	return m;
    
    }
    
    @PostMapping("/saveceo")
    public message saving(@RequestBody signup f) {
    	message m=new message();
    	List<Allusers> l=allrep.findByEmail(f.getCemail());
    	List<Allusers> l1=allrep.findByUsername(f.getCusername());
    	if(l.size()>0) {
    		m.setMess("email already exist");
    		m.setResult(false);
    		return m;
    	}
    	else if(l1.size()>0) {
    		m.setMess("username already exist");
    		m.setResult(false);
    		return m;
    	}
    	else {
    	 reps.save(f);
    	 Allusers e=new Allusers();
    	 e.setEmail(f.getCemail());
    	 e.setEmpid(f.getCid());
    	 e.setEmpname(f.getCname());
    	 e.setPassword(f.getCpassword());
    	 e.setPhonenumber(f.getCphone());
    	 e.setEmprole("CEO");
    	 e.setUsername(f.getCusername());
    	 allrep.save(e);
    	 m.setMess("stored");
 		 m.setResult(true);
 		 return m;
    	}
    }
    
    @PostMapping("/checksignin")
    public message checking(@RequestBody Allusers credential) {
        message m=new message();
        List<Allusers> l1=allrep.findByUsername(credential.getUsername());
        System.out.println(l1);
        
        if(l1.size()==1 && l1.get(0).getPassword().equals(credential.getPassword())) {
        	m.setMess("Successfully signed in");
        	m.setRole(l1.get(0).getEmprole());
        	m.setCmpid(l1.get(0).getCmpid());
        	m.setEmpid(l1.get(0).getEmpid());
        	m.setPassword(l1.get(0).getPassword());
        	m.setUsername(l1.get(0).getUsername());
        	m.setEmpname(l1.get(0).getEmpname());
        	m.setTeamid(l1.get(0).getTeamid());
        	m.setTeamname(l1.get(0).getTeamname());
            m.setResult(true);
        }
        
        else {
        	
            
        	m.setMess("Username password not match");
        	m.setResult(false);
        }
    	return m;
    }
    @PostMapping("/createcompany")
    public message savesalesman(@RequestBody Companies credential) {
    	List<Companies> l=cmprep.findByCmpname(credential.getCmpname());
    	message m=new message();
    	if(l.size()>0) {
    		m.setMess("Comapny name already available");
    		m.setResult(false);
    		
    	}
    	else {
    		cmprep.save(credential);
    		m.setMess("Comapny successfully created!!");
    		m.setResult(true);
    	}
    	
    
		return  m;
    	
    
    }
    @PostMapping("/getcompid")
    public List<Companies> getcompanyid(@RequestBody tracking credential) {
    	return cmprep.findByCmpname(credential.getLdatabase());
    	
    }
    @PostMapping("/gototeamslist")
    public List<teams> getteams(@RequestBody tracking credential) {
    	System.out.println(credential.getLadminname()+" "+credential.getLmemberid());
//    	int r=allrep.findByEmpid(credential.getLmemberid()).get(0).getCmpid();
    	System.out.println(credential.getLadminname());
//    	System.out.println(r);
    	return teamrep.findByAdminnameAndCmpid(credential.getLadminname(),credential.getLcid());
    	
    }
    @PostMapping("/createteam")
    public message createteams(@RequestBody tracking credential) {
    	System.out.println(credential.getLmemberid());
    	message m=new message();
    	System.out.println(credential.getLmemberid()+" "+credential.getLmembers()[0]);
    	List<Allusers> l=allrep.findByEmpid(credential.getLsalespersonid());
    	if(l.size()!=0) {
    	teams d=new teams();
    	d.setAdminname(credential.getLadminname());
    	d.setCmpid(credential.getLcid());
    	d.setEmpid(credential.getLmemberid());
    	d.setTeamname(credential.getLteam());
    	
    	teams t=teamrep.save(d);
    	l.get(0).setTeamname(t.getTeamname());
    	l.get(0).setAdminname(credential.getLadminname());
    	l.get(0).setTeamid(t.getTeamid());
    	System.out.println(l.get(0).getTeamname());
    	allrep.save(l.get(0));
    	
    	m.setMess("Salesperson added to team!!!");
    	m.setResult(true);
    	}
    	else {
    		m.setMess("Salesperson not available");
    		m.setResult(false);
    	}
    	return m;
    	
    }
    @PostMapping("/connecttosales")
    public List<Allusers> connectsale(@RequestBody tracking credential) {
    	System.out.println(credential.getLadminname());
    	System.out.println(credential.getLcid());
    	System.out.println(allrep.findByCmpidAndEmprole(credential.getLcid(),"salesperson").size());
    	return allrep.findByCmpidAndEmprole(credential.getLcid(),"salesperson");
    	
    }
    @PostMapping("/connectteams")
    public List<teams> connectteams(@RequestBody tracking credential) {
    	System.out.println(credential.getLadminname());
    	return teamrep.findByAdminnameAndCmpid(credential.getLadminname(),credential.getLcid());
    	
    }
    @PostMapping("/addsales")
    public message connectsale(@RequestBody Allusers credential) {
    	message m=new message();
    	
    	List<Allusers> l =allrep.findByUsername(credential.getUsername());
    	List<Employees> l1=emprepo.findByEmpusername(credential.getUsername());
    	List<Allusers> l2 =allrep.findByEmail(credential.getEmail());
    	List<Employees> l3=emprepo.findByEmpemail(credential.getEmail());
    	if(l.size()==0&&l1.size()==0&&l2.size()==0&&l3.size()==0) {
    		Employees e=new Employees();
    		e.setAddress(credential.getAddress());
    		e.setCmpid(credential.getCmpid());
    		e.setEmpemail(credential.getEmail());
    		
    		e.setEmpname(credential.getEmpname());
    		e.setEmppassword(credential.getPassword());
    		e.setEmpphonenum(credential.getPhonenumber());
    		e.setEmprole(credential.getEmprole());
    		e.setEmpusername(credential.getUsername());
    		Employees e1=emprepo.save(e);
//    		Allusers a=new Allusers();
//    		a.setAddress(credential.getAddress());
//    		a.setAdminname(credential.getAdminname());
//    		a.setCeoname(credential.getCeoname());
//    		a.setCmpid(e1.getCmpid());
//    		a.setEmail(credential.getEmail());
//    		a.setEmpid(e1.getEmpid());
//    		a.setEmpname(credential.getEmpname());
//    		a.setEmprole(credential.getEmprole());
//    		a.setPassword(credential.getPassword());
//    		a.setPhonenumber(credential.get)
    		credential.setCmpid(e1.getCmpid());
    		credential.setEmpid(e1.getEmpid());
    		allrep.save(credential);
    		m.setMess("Salesperson created successfully");
    		
    		m.setResult(true);
    	}
    	else {
    		m.setMess("Salesperson already available");
    		m.setResult(false);
    	}
    	return m;
    
    	
    }
    @PostMapping("/addlead")
    public UserLeads addlead(@RequestBody UserLeads credential) {
    	
    	return leadrep.save(credential);
    	
    }
    @PostMapping("/connectleadsfromceo")
    public List<UserLeads> addlead(@RequestBody tracking credential) {
    	return leadrep.findByLeadadminid(credential.getLid());
    	
    }
    
    @PostMapping("/connectleadsfromteam")
    public List<UserLeads> addleadfromteam(@RequestBody tracking credential) {
    	return leadrep.findByLteamid(credential.getLteamid());
    	
    }
    @PostMapping("/fromcrm")
    public message generatefromcrm(@RequestBody tracking credential) {
    	message m=new message();
    	List<crmleads> l=cleadrep.findByIndustry(credential.getIndustry());
    	if(l.size()>0) {
    	for(int i=0;i<l.size();i++) {
    		System.out.println("here");
//    		l.get(i).setCmpid(credential.getLcid());
//    		l.get(i).setAdminname(credential.getLadminname());
    		crmleads x=l.get(i);
    		UserLeads p=new UserLeads();
    		p.setAdminname(credential.getLadminname());
    		p.setCmpid(credential.getLcid());
    		p.setContactname(x.getContactname());
    		p.setCountry(x.getCountry());
    		p.setIndustry(x.getIndustry());
    		p.setJobposition(x.getJobposition());
    		p.setLaddress(x.getLaddress());
    		p.setLcmpname(x.getLcmpname());
    		p.setLeadid(x.getLeadid());
    		p.setLemail(x.getLemail());
    		p.setRequirement(x.getRequirement());
    		p.setLphonenumber(x.getLphonenumber());
//    		p.setTeamname(x.getTeamname());
    		p.setWebsite(x.getWebsite());
    		p.setEmpid(credential.getLid());
    		p.setStage("New");
    		if(credential.getLrole().equals("Admin")) {
    			p.setLeadadminid(credential.getLid());
    		}
    		else {
    			p.setLeadadminid(credential.getLmemberid());
    		}
    		leadrep.save(p);
    		m.setMess("Leads generated!!!");
    		m.setResult(true);
    	}
    	}
    	
    	return m;
    	
    }
    
//    @GetMapping("list")  
//    public List<accounts> allstudents() {  
//         return sevice1.getStudents();  
//          
//    }  
}