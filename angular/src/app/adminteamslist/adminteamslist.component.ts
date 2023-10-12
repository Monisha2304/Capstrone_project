import { Component } from '@angular/core';
import { AddsalespersonComponent } from '../addsalesperson/addsalesperson.component';
import { MatDialog } from '@angular/material/dialog';
//import { AddsalesteamComponent } from '../addsalesteam/addsalesteam.component';
import { NewleadComponent } from '../newlead/newlead.component';
import { DataserviceService } from '../dataservice.service';
import { AddsalesteamComponent } from '../addsalesteam/addsalesteam.component';
import { GenerateleadsComponent } from '../generateleads/generateleads.component';
import { TeammembersPopupComponent } from '../teammembers-popup/teammembers-popup.component';

@Component({
  selector: 'app-adminteamslist',
  templateUrl: './adminteamslist.component.html',
  styleUrls: ['./adminteamslist.component.css']
})
export class AdminteamslistComponent {
  teams:string[]=["team1","team2","team3","team4"]
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
    console.log(this.ds.track.lteamid)
  }
  generateLead(){
    this.ds.track.leadadminid=this.ds.track.leadadminid
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
  openDialog1(){
    this.dialogRef.open(AddsalespersonComponent,{
      height:'400px',
      width:'600px',
    });

  }
  teammembers(data:any){
    const num1=this.datas.indexOf(data);
    this.ds.track.lteamid=this.teamids[num1]
    console.log(this.ds.track.lteamid)
    this.ds.track.lteam=data 
    const num=this.datas.indexOf(data)
    this.ds.track.lteamid=this.teamids[num]
  const a =this.dialogRef.open(TeammembersPopupComponent,{
 height:'250px',
  width:'200px',
 });
 a.updatePosition({
  bottom: '0px',  
  right: '0px',
  left: '400px',
  top: '220px',
  });


  }
  openDialog2(){
    this.dialogRef.open(AddsalesteamComponent,{
      height:'300px',
      width:'400px',
    });

  }
  newLead(){
    this.ds.track.leadadminid=this.ds.track.lid
    this.ds.track.leadadminname=undefined
    this.dialogRef.open(NewleadComponent,{
      height:'500px',
      width:'750px',
    });

  }
}
