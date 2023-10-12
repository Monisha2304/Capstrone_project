import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadviewComponent } from './leadview/leadview.component';
import { DatabaseViewComponent } from './database-view/database-view.component';

import { DataserviceService } from './dataservice.service';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AddDatabaseComponent } from './add-database/add-database.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminslistComponent } from './adminslist/adminslist.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NewleadComponent } from './newlead/newlead.component';
import { AdminteamslistComponent } from './adminteamslist/adminteamslist.component';
import { AddsalespersonComponent } from './addsalesperson/addsalesperson.component';
import { AddsalesteamComponent } from './addsalesteam/addsalesteam.component';
import { GenerateleadsComponent } from './generateleads/generateleads.component';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { ManageleadsComponent } from './manageleads/manageleads.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AssignworkComponent } from './assignwork/assignwork.component';
import { AssignteamworkComponent } from './assignteamwork/assignteamwork.component';
import { AdminteamsviewComponent } from './adminteamsview/adminteamsview.component';
import { AdmindetailsPopupComponent } from './admindetails-popup/admindetails-popup.component';
import { TeammembersPopupComponent } from './teammembers-popup/teammembers-popup.component';
import { ImportfileComponent } from './importfile/importfile.component';
import { TeamleadsviewComponent } from './teamleadsview/teamleadsview.component';


@NgModule({
  declarations: [
    AppComponent,
    LeadviewComponent,
    DatabaseViewComponent,
    
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    AddDatabaseComponent,
    AdminslistComponent,
    PopUpComponent,
    NewleadComponent,
    AdminteamslistComponent,
    AddsalespersonComponent,
    AddsalesteamComponent,
    GenerateleadsComponent,
    LeadDetailsComponent,
    ManageleadsComponent,
    UserprofileComponent,
    AssignworkComponent,
    AssignteamworkComponent,
    AdminteamsviewComponent,
    AdmindetailsPopupComponent,
    TeammembersPopupComponent,
    ImportfileComponent,
    TeamleadsviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
