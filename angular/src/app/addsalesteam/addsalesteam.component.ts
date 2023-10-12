import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addsalesteam',
  templateUrl: './addsalesteam.component.html',
  styleUrls: ['./addsalesteam.component.css']
})
export class AddsalesteamComponent { 
  selectedvalue:any="";
  constructor(private ds:DataserviceService,private router:Router,private dialogRef: MatDialogRef<AddsalesteamComponent>){
    let hello$ = this.ds.connecttosalesperson(this.ds.track);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => this.message(data),
            err => console.error(err)
        );
        this.ds.track.lmembers=[];
  }
  ids:number[]=[]
  datas:string[]=[];
  
  message(data2:any){
    console.log(data2)
      for(let index in data2){
        if(data2[index].teamname==""){
          this.datas.push(data2[index].empname)
          this.ids.push(data2[index].empid)
        }
        
      }
      console.log(this.datas);
      console.log(this.ids)
      
  }
  member:any|undefined;
   
  onChange(event:any)
  {
      this.member=event.target.value;
      console.log("hello")
      console.log(event.target.value)

  }
  message1(data2:any){
    console.log(data2);
    if (data2.result == false){
      alert(data2.mess)
    } 
    else 
    {
      alert(data2.mess);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['adminteams']);
    }); 
    }
  }
  addsalesteam(frm:any)
  {
    if (frm.value.teamname!="")
    {

      console.log("hi");
          const teamname=frm.value.teamname; 
          const members = this.member; 
          console.log(this.member)
          this.ds.track.lmembers?.push(members)
          
          this.ds.track.lteam=teamname;
          const num=this.datas.indexOf(members)
          this.ds.track.lsalespersonid=this.ids[num];
          console.log(teamname);
          console.log(members);
          this.dialogRef.close();
          let hello$ = this.ds.createteams(this.ds.track);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => this.message1(data),
            err => console.error(err)
        );
    }
    else{
      alert("Please Enter the name for team");
    }
  }

}
