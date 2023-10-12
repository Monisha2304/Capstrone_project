import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseViewComponent } from './database-view/database-view.component';
import { LeadviewComponent } from './leadview/leadview.component';
import { SignupComponent } from './signup/signup.component';
import { DataserviceService } from './dataservice.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { AddDatabaseComponent } from './add-database/add-database.component';
import { AdminslistComponent } from './adminslist/adminslist.component';
import { AdminteamslistComponent } from './adminteamslist/adminteamslist.component';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { ManageleadsComponent } from './manageleads/manageleads.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AssignworkComponent } from './assignwork/assignwork.component';
import { AssignteamworkComponent } from './assignteamwork/assignteamwork.component';
import { AdminteamsviewComponent } from './adminteamsview/adminteamsview.component';
import { ImportfileComponent } from './importfile/importfile.component';
import { TeamleadsviewComponent } from './teamleadsview/teamleadsview.component';
const routes: Routes = [{path:'',component:DashboardComponent },
                        {path:"signin",component:SigninComponent},
                      {path:"signup",component:SignupComponent},
                    {path:"ceo",component:DatabaseViewComponent},
                    {path:"createdatabase",component:AddDatabaseComponent},
                  {path:"admins",component:AdminslistComponent},
                {path:"adminteams",component:AdminteamslistComponent},
              {path:"leads",component:LeadDetailsComponent},
            {path:"manageleads",component:ManageleadsComponent},
            {path:"userprofile",component:UserprofileComponent},
          {path:"assignwork",component:AssignworkComponent},
        {path:"assignteamwork",component:AssignteamworkComponent},
      {path:"adminteamslist",component:AdminteamsviewComponent},
    {path:"importfile",component:ImportfileComponent},
  {path:"teamleads",component:TeamleadsviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
