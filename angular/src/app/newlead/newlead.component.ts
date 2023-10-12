import { Component } from '@angular/core';
import { userleads } from '../users';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newlead',
  templateUrl: './newlead.component.html',
  styleUrls: ['./newlead.component.css']
})
export class NewleadComponent {
  constructor(private ds:DataserviceService,private router:Router,private dialogRef: MatDialogRef<NewleadComponent>){}
  addLead(frm:any)
  {
    console.log("hi");
    if (frm.value.compname!="" && frm.value.contactname!="" && frm.value.req!="" && frm.value.email!="" && frm.value.phone!="" && frm.value.jobposition!="" && frm.value.country !="" && frm.value.address !="" && frm.value.website!="")
    {
      const expressionemail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const expressionphone: RegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      const leads=new userleads();
      leads.lcmpname=frm.value.compname
      leads.contactname=frm.value.contactname
      leads.requirement=frm.value.req
      leads.lemail= frm.value.email
      leads.industry=frm.value.industry
      // const gender:string = frm.value.gender
      leads.lphonenumber= frm.value.phone
      leads.jobposition= frm.value.jobposition
      leads.country= frm.value.country
      leads.laddress= frm.value.address
      leads.website= frm.value.website
      leads.cmpid=this.ds.track.lcid
     
      leads.leadadminid=this.ds.track.leadadminid
      leads.adminname=this.ds.track.leadadminname
      const resultemail: boolean = expressionemail.test(leads.lemail!);
      const resultphone: boolean = expressionphone.test(leads.lphonenumber!);

      // console.log(compname);
      // console.log(contactname);
      // console.log(req);
      // console.log(email);
      // console.log(phone);
      // console.log(jobposition);
      // console.log(country);
      // console.log(address);
      // console.log(website);
      
      // console.log(gender);
      

      if (resultemail==true && resultphone==true)
      {
        // User.cname=frm.value.name
        // User.cemail=frm.value.email
        // User.cphone=(frm.value.phone)
        // User.cusername=(frm.value.username);
        // User.cpassword=(frm.value.password)
        this.dialogRef.close();
        let hello$ = this.ds.addlead(leads);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => console.log(data),
            err => console.error(err)
        );
      }
      else if(resultemail==false)
      {
        alert("Please Enter a valid Emailid");
      }
      else
      {
        alert("Please Enter a valid MobileNumber");
      }

    }

    else{

      alert("Please Fill Out Remaining Fields");

    }

  }
  

  

}
