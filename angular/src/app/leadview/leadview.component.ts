import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { DatabaseViewComponent } from '../database-view/database-view.component';
import { alluser } from '../alluser';
import { tracker } from '../tracker';
@Component({
  selector: 'app-leadview',
  templateUrl: './leadview.component.html',
  styleUrls: ['./leadview.component.css']
})
export class LeadviewComponent {
  // const input = document.getElementById("hide",)as HTMLButtonElement["onclick"] ; function(){
  //   document.getElementById("hide").style.display="none";
  constructor(private ds:DataserviceService) {
    const all=new tracker()
    let hello$ = this.ds.connecttoadmins(all);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => console.log(data),
            err => console.error(err)
        );
  }
  admins :string[]=["Monisha","Murugan","Geetha"]
  connecttoadmins(admin:any){
    

  }

  
}
