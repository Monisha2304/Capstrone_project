import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NavigationEnd, Router } from '@angular/router';
import { users } from '../users';
import { DataserviceService } from '../dataservice.service';
import { alluser } from '../alluser';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  page1:boolean=true;
  constructor(private ds:DataserviceService,private router:Router){}
  message(data2:any){
    this.ds.track.lcid=data2.cmpid
    this.ds.track.lcname=data2.cmpname
    this.ds.track.lid=data2.empid
    this.ds.track.lname=data2.empname
    
    console.log(this.ds.track);
    console.log(data2);
    
    if (data2.result == false){
      alert(data2.mess)
    } 
    else 
    {
      alert("Signed in Successfully");
      if(data2.role=="CEO"){
        this.ds.track.lrole="ceo"
        this.ds.track.lid=data2.empid
        this.ds.track.lname=data2.empname
        // this.ds.track.lmemberid=data2.empid
        // this.ds.track.leadadminid=data2.empid
      this.router.navigate(["/ceo"]); // goesto database-view component 
      }
      else if(data2.role=="Admin"){
        this.ds.track.lrole="Admin"
        this.ds.track.lid=data2.empid
        this.ds.track.ladminname=data2.empname
        this.ds.track.lmemberid=data2.empid
        this.ds.track.leadadminid=data2.empid
      this.ds.track.leadadminname=data2.empname
        this.ds.track.lcid=data2.cmpid
       this.ds.track.lname=data2.empname
      
        this.router.navigate(["/adminteamslist"]);
      }
      else if(data2.role=="salesperson"){
        this.ds.track.lrole="salesperson"
        this.ds.track.lcid=data2.cmpid
        this.ds.track.lname=data2.empname
        this.ds.track.lid=data2.empid
        this.ds.track.ladminname=data2.empname
        this.ds.track.lmemberid=data2.empid
        this.ds.track.leadadminid=data2.empid
      this.ds.track.leadadminname=data2.empname
      this.ds.track.lteam=data2.teamname
      this.ds.track.lteamid=data2.teamid
      console.log(this.ds.track)
     
      
        this.router.navigate(["/teamleads"]);
      }
      console.log(this.ds.track)
    }

  }
  message1(data:any){
    
    this.ds.track.ladminname=data.adminname
    this.ds.track.lmemberid=data.leadadminid
    this.ds.track.leadadminid=data.leadadminid
  this.ds.track.leadadminname=data.leadadminname
  }
  // u=new alluser();
  signincheck(frm:any)
  {
    // const Users=new users();
    const User=new alluser();
    User.username = frm.value.uname;
    User.password = frm.value.password;
    // this.u.username = frm.value.uname;
    // this.u.password = frm.value.password;
    
    let hello$ = this.ds.checksignin(User);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => this.message(data),
            err => console.error(err)
        );

  }
  // constructor(private router: Router) { 
  //   router.events.subscribe((val)=>{
  //     if (val instanceof NavigationEnd){
  //       if (val.url=="/signin"){
  //         this.page1=false;
  //       }
  //       else{
  //         this.page1=true;
  //       }
  //     }
  //   });
// }
   
} 
