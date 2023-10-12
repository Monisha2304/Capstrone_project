package com.example.demo;

import java.sql.*;

import java.sql.DriverManager;
import java.util.*;
public class connect {
	static Connection connection = null;

	public static Connection connects() {
		Connection connection = null;
        try {
            // below two lines are used for connectivity.
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/crm","root","root");
//            Statement s=connection.createStatement();
//            ResultSet s1=s.executeQuery("Select * from placement");
            
            
        }
        catch (Exception exception) {
            System.out.println(exception);
        }
        return connection;
		// TODO Auto-generated method stub
		
	}
}
