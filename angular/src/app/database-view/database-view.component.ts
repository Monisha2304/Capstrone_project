import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { users } from '../users';
import { Observable } from 'rxjs';
import { company } from '../company';
import { LeadviewComponent } from '../leadview/leadview.component';
@Component({
  selector: 'app-database-view',
  templateUrl: './database-view.component.html',
  styleUrls: ['./database-view.component.css']
})
export class DatabaseViewComponent {
  names:string[]=['a','b','c','d','e','f'];
  databases:string[]=["gearup","abc","odoo","prodapt","hdfc","airtel"]
 
  constructor(private db:DataserviceService){
    console.log(this.db.track)
    
    let hello$ = this.db.getcompanies(this.db.track);
        hello$.subscribe(
            (data: any) => this.message(data),
            err => console.error(err)
        );

  }
  datas:string[]=[];
  message(data2:any){
      for(let index in data2){
          this.datas.push(data2[index].cmpname)
      }
      console.log(this.datas);
  }
  
  
 
connecttodatabase(database:any){
  this.db.track.ldatabase=database;
  let hello$ = this.db.getcompid(this.db.track);
        hello$.subscribe(
            (data: any) => this.message1(data),
            err => console.error(err)
        );
  console.log(this.db.track)
  console.log("hee")
}    /// goes to adminslist page 
message1(data:any){
  this.db.track.lcid=data[0].cmpid
}
  
}
