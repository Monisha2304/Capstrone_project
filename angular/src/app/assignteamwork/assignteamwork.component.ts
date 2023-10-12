import { ChangeDetectorRef, Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { MatDialog } from '@angular/material/dialog';
import { userleads } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignteamwork',
  templateUrl: './assignteamwork.component.html',
  styleUrls: ['./assignteamwork.component.css']
})
export class AssignteamworkComponent {
  admins :string[]=[];
  empids:number[]=[]
  teamid:number=0
    constructor(private ds:DataserviceService,private dialogRef: MatDialog,private changeDetector: ChangeDetectorRef,private router:Router) {
      // if(this.ds.track.lrole=="ceo"){
      //   this.ds.track.leadadminid=this.ds.track.lmemberid
      // }
      let hello$ = this.ds.connecttoteams(this.ds.track);
      hello$.subscribe(            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
              (data: any) => this.message(data),
              err => console.error(err)
          );
          let hello$1 = this.ds.getleads(this.ds.track);
          hello$1.subscribe(
              // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
              (data: any) => this.message1(data),
              err => console.error(err)
          );
    }
    cmpids:number[]=[]
    message1  (data2:any){
      for(let index in data2){
        if(data2[index].teamname==null && data2[index].adminname==this.ds.track.ladminname){
          // this.datas.push(data2[index].empname)
          this.adminAnew.push(data2[index].lcmpname)
          this.cmpids.push(data2[index].leadid)
        }
      }
    console.log(this.adminAnew);
  }
  selected(event:any){
    console.log(event)
    const num=this.adminAnew.indexOf(event)
    const s=new userleads()
    console.log(s)
    s.teamname=this.ds.track.lteam
    s.leadid=this.cmpids[num]
    s.lteamid=this.ds.track.lteamid
    s.adminname=this.ds.track.ladminname
    console.log(this.ds.track)
    s.leadadminid=this.ds.track.leadadminid
    console.log(s)
    console.log("here is selected")
    // s.adminname=this.ds.track.leadadminname
    // s.leadadminid=this.adminid
    // console.log(s.leadadminid)
    // console.log(s+"hii")
    let hello$12 = this.ds.addthelead(s);
          hello$12.subscribe(
              // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
              (data: any) => this.message3(data),
              err => console.error(err)
          );
  }
  rejected(event:any){ 
    console.log(event)
    const num=this.adminAadd.indexOf(event)
    const s=new userleads()
    s.lcmpname=event 
    s.leadid=this.admidAddids[num]
    s.teamname=undefined
    s.lteamid=this.ds.track.lteamid
    // s.adminname=this.ds.track.leadadminname
    let hello$12 = this.ds.changeteamid(s);
          hello$12.subscribe(
              // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
              (data: any) => this.message3(data),
              err => console.error(err)
          );
  }
  message3(data:any){
    console.log(data);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['assignteamwork']);
  }); 
  }
  datas:string[]=[];
  teamids:number[]=[]
  message(data2:any){
        console.log(data2)
        for(let index in data2){
          if(data2[index].adminname==this.ds.track.ladminname)
            this.datas.push(data2[index].teamname)
            this.empids.push(data2[index].empid)
            this.teamids.push(data2[index].teamid)
        }
        console.log(this.datas);
    }
    admidAddids:number[]=[]
    message2(data2:any){
      console.log(this.ds.track.lteam + "inside message2")
      console.log(data2)
      this.adminAadd=[]
      this.admidAddids=[]
      for(let index in data2){
        console.log(data2[index].teamname+" "+this.ds.track.lteam)
      if(data2[index].teamname==this.ds.track.lteam){
        
        this.adminAadd.push(data2[index].lcmpname)
        this.admidAddids.push(data2[index].leadid)
      }
    }
    console.log(this.adminAadd)
    }
    adminAnew:any[]=[];
    adminAadd:any[]=[];
  display:boolean=false;
  shownew(event:any)
  {
        // this.ds.track.lteam=event.target.value
        console.log("iji"+event.target.value); 
        let k:string = event.target.value;
        console.log(k)
        console.log(this.datas)
        const num=this.datas.indexOf(k)
        this.ds.track.lteam=k;
        console.log(this.ds.track.lteam)
        this.ds.track.lteamid=this.teamids[num];
        
        this.teamid=this.teamids[num]
        console.log(this.ds.track.lteamid)
        this.display=true;
        let hello$12 = this.ds.gettheleadsforteams(this.ds.track);
          hello$12.subscribe(
              // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
              (data: any) => this.message2(data),
              err => console.error(err)
          );
  }
  }
  
  
  
  
