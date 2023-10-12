import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DataserviceService } from '../dataservice.service';
import { alluser } from '../alluser';
import { observable } from 'rxjs';
import { NewleadComponent } from '../newlead/newlead.component';
import { GenerateleadsComponent } from '../generateleads/generateleads.component';
import { AdmindetailsPopupComponent } from '../admindetails-popup/admindetails-popup.component';

@Component({
  selector: 'app-adminslist',
  templateUrl: './adminslist.component.html',
  styleUrls: ['./adminslist.component.css']
})
export class AdminslistComponent {
  admins :string[]=[];
  
  // constructor(private dialogRef: MatDialog)
  // {
  // }
  constructor(private ds:DataserviceService,private dialogRef: MatDialog) {
    this.ds.track.ladminname=undefined
    this.ds.track.lmemberid=this.ds.track.lid
    this.ds.track.leadadminid=this.ds.track.lid
    this.ds.track.leadadminname=this.ds.track.lname
    console.log(this.ds.track)
    
    let hello$ = this.ds.connecttoadmins(this.ds.track);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => this.message(data),
            err => console.error(err)
        );
  }
  // admins :string[]=["Monisha","Murugan","Geetha"]
  gototeams(adminname:any){
    this.ds.track.ladminname=adminname
    const num=this.datas.indexOf(adminname)
    console.log(num)
    console.log(adminname)
    console.log(this.datas)
    console.log(this.empids)
    console.log(this.empids[num])
    this.ds.track.lmemberid=this.empids[num];
    this.ds.track.leadadminid=this.empids[num]
    this.ds.track.leadadminname=adminname
    console.log(this.ds.track)
    

  }     // go to adminteams
  
  newLead(){
    this.ds.track.leadadminid=this.ds.track.lid
    this.ds.track.leadadminname=undefined
    this.dialogRef.open(NewleadComponent,{
      height:'500px',
      width:'750px',
    });

  }
  generateLead(){
    this.ds.track.leadadminid=this.ds.track.lid
    this.ds.track.leadadminname=undefined
    console.log("inside gen")
    const a =this.dialogRef.open(GenerateleadsComponent,{
      
      height:'300px',

 

      width:'400px',

 

    });

 

   

      a.updatePosition({

        bottom: '0px',  

        right: '0px',

        left: '100px',

        top: '120px',

      });

 

 

  }
  datas:string[]=[];
  empids:number[]=[]
  message(data2:any){
    console.log(data2)
      for(let index in data2){
        if(data2[index].emprole=="Admin"){
          this.datas.push(data2[index].empname)
          this.empids.push(data2[index].empid)
        }
      }
      console.log(this.datas);
      console.log(this.empids)
      
  }
  admindetailspop(data:any){
    this.ds.track.ladminname=data
    const num=this.datas.indexOf(data)
    this.ds.track.lmemberid=this.empids[num]
    const a = this.dialogRef.open(AdmindetailsPopupComponent,{
      height:'300px',
      width:'300px',
    });
    a.updatePosition({
      bottom: '0px',  
      right: '0px',
      left: '400px',
      top: '220px',
    });
  }
  openDialog(){
    this.ds.track.leadadminid=this.ds.track.lid
    this.ds.track.leadadminname=undefined
    this.dialogRef.open(PopUpComponent,{
      height:'400px',
      width:'600px',
    });

  }
 
  
}
