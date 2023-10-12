import { Component } from '@angular/core';
import { alluser } from '../alluser';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addsalesperson',
  templateUrl: './addsalesperson.component.html',
  styleUrls: ['./addsalesperson.component.css']
})
export class AddsalespersonComponent {
  selectedvalue = null;
  salesteam:any="";
 
   constructor(private ds:DataserviceService,private dialogRef: MatDialogRef<AddsalespersonComponent>,private router:Router){
    let hello$ = this.ds.connecttoteams(this.ds.track);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => this.message1(data),
            err => console.error(err)
        );
   }
   datas:string[]=[];
   teamids:number[]=[]
   message1(data2:any){
    console.log(data2)
      for(let index in data2){
        if(!this.datas.includes(data2[index].teamname)){
          this.datas.push(data2[index].teamname)
          this.teamids.push(data2[index].teamid)
          
        }
        
      }
      console.log(this.datas);
      
      
  }
  onChange(event:any)
  {
      this.salesteam=event.target.value;
      this.ds.track.lteam=this.salesteam
      const num=this.datas.indexOf(this.salesteam)
      this.ds.track.lteamid=this.teamids[num]
      console.log(this.salesteam)
  }
  message(data2:any){

    if (data2.result == false){
      alert(data2.mess)
    } 
    else 
    {
      alert("salesperson added Successfully");
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['adminteams']);
    }); 
    }
  }
  addsalesperson(frm:any)
  {
    if (frm.value.name!="" && frm.value.email!="" && frm.value.phone!="" && frm.value.address!="" && frm.value.gender!="" && frm.value.uname!="" && frm.value.code !="" )
    {
      const all =new alluser()
      const expressionemail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const expressionphone: RegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      
  //     const expressionemail: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //     const expressionphone: RegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  //     const name:string=frm.value.name
  //     const email:string=frm.value.email
  //     const phone:string=frm.value.phone
  //     const address:string = frm.value.address
  //     // const gender:string = frm.value.gender
  //     const uname:string = frm.value.uname
  //     const code:string = frm.value.code
  //     const resultemail: boolean = expressionemail.test(email);
  //     const resultphone: boolean = expressionphone.test(phone);
  //     console.log(name);
  //     console.log(email);
  //     console.log(phone);
  //     console.log(address);
  //     // console.log(gender);
  //     console.log(uname);
  //     console.log(code);
  //     console.log(this.salesteam);

  //     if (resultemail==true && resultphone==true)
  //     {
  //       // User.cname=frm.value.name
  //       // User.cemail=frm.value.email
  //       // User.cphone=(frm.value.phone)
  //       // User.cusername=(frm.value.username);
  //       // User.cpassword=(frm.value.password)
  //       alert("ok");
  //     }
  //     else if(resultemail==false)
  //     {
  //       alert("Please Enter a valid Emailid");
  //     }
  //     else
  //     {
  //       alert("Please Enter a valid MobileNumber");
  //     }

  //   }

  //   else{

  //     alert("Please Fill Out Remaining Fields");

  //   }


  // }
  all.empname=frm.value.name
        all.email=frm.value.email 
        all.phonenumber=frm.value.phone
        all.address = frm.value.address
        // const gender:string = frm.value.gender
        all.username = frm.value.uname
        all.password= frm.value.code
        all.teamname=this.salesteam
        all.cmpid=this.ds.track.lcid;
        console.log(this.ds.track.lcid)
        console.log(this.ds.track)
        all.ceoname=this.ds.track.lname
        all.emprole="salesperson"
        all.adminname=this.ds.track.ladminname
        all.teamid=this.ds.track.lteamid
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
          let hello$ = this.ds.addsalesdetails(all);
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
