import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpRequest,HttpResponse } from '@angular/common/http';
import { teams, userleads, users } from './users';
import { alluser } from './alluser';
import { company } from './company';
import { tracker } from './tracker';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ 
  providedIn: 'root'
})
export class DataserviceService {
  private baseUrl = "http://localhost:2423";

  constructor(private http: HttpClient) { }
  track=new tracker();
  leads=new userleads();
  adminName:string="ajbsajbc";
  databasename:string="";
  getcompanies(track:tracker){
    console.log("i am here")
    return this.http.post<company>(`${this.baseUrl}`+"/getcompany",track);
  }
  gettheleads(track:tracker){
    return this.http.post<company>(`${this.baseUrl}`+"/gettheleads", (track));
  
  }
  connecttoadmins(track:tracker){
    return this.http.post<userleads>(`${this.baseUrl}`+"/connecttoadmin", (track));
  }
  getleads(track:tracker){
    return this.http.post<company>(`${this.baseUrl}`+"/getleads", (track));
  }
  addthelead(leads:userleads){
    return this.http.post<userleads>(`${this.baseUrl}`+"/addthelead", (leads));
  }
  changeadmin(leads:userleads){
    return this.http.post<userleads>(`${this.baseUrl}`+"/changeadmin", (leads));
  }
  getmemberdetail(track:tracker){
    return this.http.post<alluser>(`${this.baseUrl}`+"/getmemberdetail", (track));
  }
  getuserdata(track:tracker){
    return this.http.post<alluser>(`${this.baseUrl}`+"/getuserdata", (track));
  }
  public addceodetails(User:users){
    return this.http.post<users>(`${this.baseUrl}`+"/saveceo", (User));

  }
  public addlead(leads:userleads){
    return this.http.post<users>(`${this.baseUrl}`+"/addlead", (leads));

  }
  public gototeamslist(track:tracker){
    return this.http.post<users>(`${this.baseUrl}`+"/gototeamslist", (track));
  }
  public connecttosalesperson(track:tracker){
    console.log(track)
    return this.http.post<alluser>(`${this.baseUrl}`+"/connecttosales", (track));
  }
  public checksignin(User:alluser){
    return this.http.post<users>(`${this.baseUrl}`+"/checksignin", (User));
  }
  public connecttoteams(track:tracker){
    return this.http.post<teams>(`${this.baseUrl}`+"/connectteams", (track));
  }
  public createteams(track:tracker){
    return this.http.post<users>(`${this.baseUrl}`+"/createteam", (track));
  }
  public createcompany(Company:company){
    return this.http.post<users>(`${this.baseUrl}`+"/createcompany", (Company));
  }
  public addadmindetails(all:alluser){
    return this.http.post<alluser>(`${this.baseUrl}`+"/addadmin", (all));
  }
  public generatefromcrm(track:tracker){
    return this.http.post<userleads>(`${this.baseUrl}`+"/fromcrm", (track));
  }
  public connecttoleadsfromceo(track:tracker){
    return this.http.post<userleads>(`${this.baseUrl}`+"/connectleadsfromceo", (track));
  }
  public connecttoleadsfromteam(track:tracker){
    return this.http.post<userleads>(`${this.baseUrl}`+"/connectleadsfromteam", (track));
  }
  public geteamdetail(track:tracker){
    return this.http.post<userleads>(`${this.baseUrl}`+"/geteamdetail", (track));
  }
  public addsalesdetails(all:alluser){
    return this.http.post<alluser>(`${this.baseUrl}`+"/addsales", (all));
  }
  public getcompid(track:tracker){
    return this.http.post<company>(`${this.baseUrl}`+"/getcompid", (track));
  }
  public changeteamid(leads:userleads){
    return this.http.post<userleads>(`${this.baseUrl}`+"/changeteamid", (leads));
  }
  public gettheleadsforteams(track:tracker){
    console.log("inside data service")
    return this.http.post<userleads>(`${this.baseUrl}`+"/gettheleadsforteams", (track));
  }
  public imports(track:tracker){
    console.log("inside data service")
    return this.http.post<userleads>(`${this.baseUrl}`+"/imports", (track));
  }
  savePhoto(formData:FormData):Observable<any>{

    return this.http.post("http://localhost:2423/savePhoto",formData);

  }

  saveFile(formData:FormData):Observable<any>{

    return this.http.post("http://localhost:2423/saveFile",formData);

  }

 

}
  //   return this.http.post("http://localhost:2023/save",student2);  
  // }  

  
 
  
  

