import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { alluser } from '../alluser';

@Component({
  selector: 'app-admindetails-popup',
  templateUrl: './admindetails-popup.component.html',
  styleUrls: ['./admindetails-popup.component.css']
})
export class AdmindetailsPopupComponent {
  allusers=new alluser();
  constructor(private ds:DataserviceService){
    let hello$ = this.ds.getuserdata(this.ds.track);
    hello$.subscribe(
        (data: any) => this.message(data),
        err => console.error(err)
    );
  }
  datas:any[]=[]
  message(data:any){
      console.log(data);
      this.allusers=data
  }
  
}
