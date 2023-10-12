import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { alluser } from '../alluser';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent //implements OnInit 
{
  // firstName;
  // constructor(@Inject(MAT_DIALOG_DATA) public data1){
  //   this.firstName = data1.name;
  // }

  // ngOnInit(): void {
      
  // }
  gender: string = "Male";
  
  constructor(private ds:DataserviceService,private dialogRef: MatDialogRef<PopUpComponent>,private router:Router){}
  message(data2:any){

    if (data2.result == false){
      alert(data2.mess)
    } 
    else 
    {
      alert("Admin added Successfully");
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['admins']);
    }); 
    }

  }
  createAdmin(frm:any)
  {
      if (frm.value.name!="" && frm.value.email!="" && frm.value.phone!="" && frm.value.address!="" && frm.value.gender!="" && frm.value.uname!="" && frm.value.code !="" )
      {
        const all=new alluser()
        const expressionemail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const expressionphone: RegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      
        all.empname=frm.value.name
        all.email=frm.value.email 
        all.phonenumber=frm.value.phone
        all.address = frm.value.address
        // const gender:string = frm.value.gender
        all.username = frm.value.uname
        all.password= frm.value.code
        
        all.cmpid=this.ds.track.lcid;
        console.log(this.ds.track.lcid)
        console.log(this.ds.track)
        all.ceoname=this.ds.track.lname
        all.emprole="Admin"
      
        const resultemail: boolean = expressionemail.test(all.email!);
        const resultphone: boolean = expressionphone.test(all.phonenumber!);
        console.log(all.empname);
        console.log(all.cmpid);
        // console.log(phone);
        // console.log(address);
        // // console.log(gender);
        // console.log(uname);
        // console.log(code);
        // console.log(name);
  
        if (resultemail==true && resultphone==true)
        {
          // User.cname=frm.value.name
          // User.cemail=frm.value.email
          // User.cphone=(frm.value.phone)
          // User.cusername=(frm.value.username);
          // User.cpassword=(frm.value.password)
          // alert("ok");
          this.dialogRef.close();
          let hello$ = this.ds.addadmindetails(all);
        hello$.subscribe(
            (data: any) => this.message(data),
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
