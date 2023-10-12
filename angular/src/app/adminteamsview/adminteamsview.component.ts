import { Component } from '@angular/core';
import { NewleadComponent } from '../newlead/newlead.component';
import { AddsalesteamComponent } from '../addsalesteam/addsalesteam.component';
import { AddsalespersonComponent } from '../addsalesperson/addsalesperson.component';
import { GenerateleadsComponent } from '../generateleads/generateleads.component';
import { DataserviceService } from '../dataservice.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adminteamsview',
  templateUrl: './adminteamsview.component.html',
  styleUrls: ['./adminteamsview.component.css']
})
export class AdminteamsviewComponent {
  role1:boolean=true;
  
  constructor(private ds:DataserviceService, private dialogRef: MatDialog)
  {
    
    const role=this.ds.track.lrole;
    if (role=="ceo")
    {
      this.role1=false;
    }
    let hello$ = this.ds.gototeamslist(this.ds.track);
    hello$.subscribe(
        (data: any) => this.message(data),
        err => console.error(err)
    );
  }
  datas:string[]=[];
  teamids:number[]=[]
  message(data2:any){
      for(let index in data2){
        if(!this.datas.includes(data2[index].teamname)){
          this.datas.push(data2[index].teamname)
          this.teamids.push(data2[index].teamid)
        }
      }
      console.log(this.datas);
  }
  geteamid(data:any){
    const num=this.datas.indexOf(data);
    this.ds.track.lteamid=this.teamids[num]
  }
  generateLead(){
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
  openDialog1(){
    this.dialogRef.open(AddsalespersonComponent,{
      height:'400px',
      width:'600px',
    });

  }
  openDialog2(){
    this.dialogRef.open(AddsalesteamComponent,{
      height:'300px',
      width:'400px',
    });

  }
  newLead(){
    this.dialogRef.open(NewleadComponent,{
      height:'500px',
      width:'750px',
    });

  }
}

