import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-teammembers-popup',
  templateUrl: './teammembers-popup.component.html',
  styleUrls: ['./teammembers-popup.component.css']
})
export class TeammembersPopupComponent {
  teamMembers:string[]=[];
  constructor(private ds:DataserviceService){
  // teamMembers:string[]=["Azfd","sad","fsdf","dsffd"];
  
  let hello$ = this.ds.getmemberdetail(this.ds.track);
        hello$.subscribe(
            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),
            (data: any) => this.message(data),
            err => console.error(err)
        );
}
message(data:any){
  console.log(data)
  for(let index in data){
    if(!this.teamMembers.includes(data[index].empname)){
      this.teamMembers.push(data[index].empname);
    }
  }

}
}
