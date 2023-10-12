import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { userleads } from '../users';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generateleads',
  templateUrl: './generateleads.component.html',
  styleUrls: ['./generateleads.component.css']
})
export class GenerateleadsComponent {
  constructor(private db:DataserviceService,private dialogRef: MatDialogRef<GenerateleadsComponent>){}
  industry:any="Consulting";
   
  onChange(event:any)
  {
      this.industry=event.target.value;
      console.log(this.industry);
      this.db.track.industry=this.industry
      

  }
  message(data2:any){

    alert(data2.mess)

  }
  generate(){
    // const uleads=new userleads();
    // uleads.industry=this.db.track.industry
    // uleads.adminname=this.db.track.ladminname
    this.dialogRef.close();
    
    let hello$ = this.db.generatefromcrm(this.db.track);
    hello$.subscribe(
        (data: any) => this.message(data),
        err => console.error(err)
    );
  }

}
