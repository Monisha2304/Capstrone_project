import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  constructor(private ds:DataserviceService){
    console.log(ds.track)
  }

}
