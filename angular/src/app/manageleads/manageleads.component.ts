import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { userleads } from '../users';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-manageleads',
  templateUrl: './manageleads.component.html',
  styleUrls: ['./manageleads.component.css']
})
export class ManageleadsComponent {
  constructor(private ds:DataserviceService){
    console.log(ds.track)
    if(this.ds.track.lrole=="ceo"){
      this.ds.track.leadadminid=this.ds.track.lid
    }
    else if(this.ds.track.lrole=="Admin"){
      this.ds.track.leadadminid=this.ds.track.lmemberid
    }
    else{
      this.ds.track.leadadminid=this.ds.track.lteamid
    }
    let hello$ = this.ds.connecttoleadsfromceo(this.ds.track);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => this.message(data),
            err => console.error(err)
        );
  }
  Leads:userleads[]=[]
  message(data:any){
    for(let index in data){
      
        this.Leads.push(data[index])
      
    }
    console.log(this.Leads);
  }
  leademail:any="";
  leadspage(group:userleads)
  { 
    console.log(document.getElementById("email")?.innerHTML)
    this.leademail=document.getElementById("email")?.innerHTML;
    this.ds.track.useleads=group
    console.log(this.ds.track.useleads)
  }
  fileName= 'ExcelSheet.xlsx';  
  exportexcel()
  {
    let element = document.getElementById('table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); 

    XLSX.writeFile(wb, this.fileName);
    
  }
  exportcsv()
  {
        
  }

}

