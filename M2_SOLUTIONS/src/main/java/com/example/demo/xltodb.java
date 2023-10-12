package com.example.demo;
//import java.io.*;
//import java.net.Socket;
//import java.sql.*;
//import java.util.*;
//import java.io.File;
//import java.io.IOException;
//
//import org.apache.poi.hssf.usermodel.HSSFFormulaEvaluator;
//import org.apache.poi.hssf.usermodel.HSSFWorkbook;
//import org.apache.poi.ss.usermodel.Cell;
//import org.apache.poi.ss.usermodel.Row;
//import org.apache.poi.ss.usermodel.*;
//String sql = "INSERT INTO leads(Id ,Company_name,Requirement,Contact_name,Email,Job_position,Phone_number,Street,City,State,Country,website,Notes);";
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entity.UserLeads;
import com.example.demo.entity.crmleads;
import com.example.demo.repository.crmleadsrepo;

import jxl.Cell;
import jxl.CellType;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

public class xltodb {
	
    private String inputFile;

    public void setInputFile(String inputFile) {
        this.inputFile = inputFile;
    }

    public List<UserLeads> read() throws IOException  {
        File inputWorkbook = new File(inputFile);
        Connection c=connect.connects();
        Workbook w;
        ArrayList<String> a=new ArrayList<String>();
        List<UserLeads> m=new ArrayList<UserLeads>();
   
        try {
            w = Workbook.getWorkbook(inputWorkbook);
            // Get the first sheet
            Sheet sheet = w.getSheet(0);
            System.out.println(sheet);
            //String sql = "INSERT INTO leads(Id ,Company_name,Requirement,Contact_name,Email,Job_position,Phone_number,Street,City,State,Country,website,Notes);";
            System.out.println(sheet.getRows()+" "+sheet.getColumns());
            
            	for(int i=1;i<sheet.getRows()-1;i++) {
//            		for (int j = 0; j < sheet.getColumns(); j++) {
//            	System.out.println(sheet.getCell(j,i).getContents());
//            	}
//				String s3="insert into crmleads(leadid ,lcmpname,industry,requirement,contactname,lemail,jobposition,lphonenumber,laddress,country,website) values(?,?,?,?,?,?,?,?,?,?,?);";
//				try {
//				PreparedStatement ps=(PreparedStatement) c.prepareStatement(s3);   
//				for (int j = 0; j < 11; j++) {
//                    Cell cell = sheet.getCell(j,i);
//                    
//     		           
//     		          System.out.println(cell.getContents());
//     		           ps.setString(j+1, cell.getContents());
//                    }
//     		           
////     		           ps.execute();
//                    
//				}
//				
//				catch(Exception e) {
//					e.printStackTrace();
//				}
				UserLeads lead=new UserLeads();
				lead.setContactname(sheet.getCell(4,i).getContents());
				lead.setCountry(sheet.getCell(9,i).getContents());
				lead.setIndustry(sheet.getCell(2,i).getContents());
				lead.setJobposition(sheet.getCell(6,i).getContents());
				lead.setLaddress(sheet.getCell(8,i).getContents());;
				lead.setLcmpname(sheet.getCell(1,i).getContents());
//				lead.setLeadid(Integer.parseInt(sheet.getCell(0,i).getContents()));
				lead.setLemail(sheet.getCell(5,i).getContents());;
				lead.setLphonenumber(sheet.getCell(7,i).getContents());
				lead.setRequirement(sheet.getCell(3,i).getContents());
				lead.setWebsite(sheet.getCell(10,i).getContents());
//				System.out.println("contact"+lead.getContactname());
//				System.out.println("country"+lead.getCountry());
//				System.out.println("industry"+lead.getIndustry());
//				System.out.println(lead);
				m.add(lead);
				
            }
            
                
            
        } catch (BiffException e) {
            e.printStackTrace();
        }
        return m;
            
    }
    

//    public static void main(String[] args) throws IOException {
//        xltodb test = new xltodb();
//        test.setInputFile("C:\\Users\\monisha.m\\Downloads\\datass (4).xls");
//        test.read();
//    }

}