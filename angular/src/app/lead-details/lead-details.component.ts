import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { userleads } from '../users';
import { log } from '../alluser';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent {
  uses:userleads|undefined
  ifs:boolean=true;
  constructor(private ds:DataserviceService){
    this.uses=ds.track.useleads
    this.uses!.salesperson=this.ds.track.lname
    this.mess1()
    console.log(this.ds.track);

    const lrole=this.ds.track.lrole ;

    console.log("hii"+lrole);

    if (lrole=="Admin" || lrole=="ceo")

    {

      this.ifs=false;

    }
  }
  mess1(){
    this.uses=this.ds.track.useleads
    console.log(this.uses?.lcmpname)
  }
  
  
  Salesperson:any="";
  Statebefore:any="";
  Stateafter:any="";
  Logmessage:any="";
  timestamp:any="";
  Logdetails:any[]=[]
  datetime:any

  prompt1:any="";
  updatelog()
  {
      this.datetime=new Date();
  }
  
  

 

 


  type:boolean=false;

  // prompt1:any="";


 

  // updatelog()

  // {

  //     this.datetime=new Date();

  // }

  getinputlog()

  {

    // this.ifs=true;

    const p=prompt("Enter Log Details");

    const l = new log();

    l.salesman=this.ds.track.lname;
   
    l.timestamp=new Date();

    l.log=p;

    l.type=true;

    this.Logdetails.push(l);

    this.type=true;

   

   

  }

  newlog()

  {

 

    const p =prompt("More details required for changing to new:");

    const l = new log();

    l.salesman=this.ds.track.lname;
    

    

    l.stagebefore=this.ds.track.useleads!.stage;
    this.ds.track.useleads!.stage="New"
    l.stageafter="New";
    l.timestamp=new Date;

    l.log=p;

    this.Logdetails.push(l);

    this.type=false;

  }

  qualifiedlog()

  {

    const p =prompt("More details required for changing to qualified:");

    const l = new log();

    l.salesman=this.ds.track.lname;
    l.stagebefore=this.ds.track.useleads!.stage;
    this.ds.track.useleads!.stage="Qualified"
    l.stageafter=this.ds.track.useleads!.stage;
    l.timestamp=new Date;

    l.timestamp=new Date;

    l.log=p;

    this.Logdetails.push(l);

    // this.type=false;

  }

  prepositionlog()

  {

    const p =prompt("More details required for changing to preposition:");

    const l = new log();

    l.salesman=this.ds.track.lname;
    l.stagebefore=this.ds.track.useleads!.stage;
    this.ds.track.useleads!.stage="Preposition"
    l.stageafter=this.ds.track.useleads!.stage;
    l.timestamp=new Date;

    l.log=p;

    this.Logdetails.push(l);

    // this.type=false;

  }

  negotiationlog()

  {

    const p =prompt("More details required for changing to negetiation:");

    const l = new log();

    l.salesman=this.ds.track.lname;
    l.stagebefore=this.ds.track.useleads!.stage;
    this.ds.track.useleads!.stage="Negotiation"
    l.stageafter=this.ds.track.useleads!.stage;
    l.timestamp=new Date;
    l.log=p;

    this.Logdetails.push(l);

    // this.type=false;

  }

  wonlog()

  {

    const p =prompt("More details required for changing to Won:");

    const l = new log();

    l.salesman=this.ds.track.lname;
    l.stagebefore=this.ds.track.useleads!.stage;
    this.ds.track.useleads!.stage="Won"
    l.stageafter=this.ds.track.useleads!.stage;
    l.timestamp=new Date;

    l.log=p;

    this.Logdetails.push(l);

    // this.type=false;

  }

 


}


