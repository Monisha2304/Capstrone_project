import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboard:boolean=true;
  constructor(private router: Router) { 
    // router.events.subscribe((val)=>{
    //   if (val instanceof NavigationEnd){
    //     if (val.url=='/'){
    //       this.dashboard=false;
    //     }
    //     else{
    //       this.router.navigate(['/signin']);
    //     }
    //   }
    // });
  }
 

}
