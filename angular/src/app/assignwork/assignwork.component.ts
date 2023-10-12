import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import { ChangeDetectorRef } from '@angular/core';
import { userleads } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignwork',
  templateUrl: './assignwork.component.html',
  styleUrls: ['./assignwork.component.css']
})
export class AssignworkComponent {

   // @ViewChild("adminlist") printSectionRef: ElementRef | undefined;
  admins :string[]=[];
empids:number[]=[]
adminid:number=0
  constructor(private ds:DataserviceService,private dialogRef: MatDialog,private changeDetector: ChangeDetectorRef,private router:Router) {
  

    
  let hello$ = this.ds.connecttoadmins(this.ds.track);

        hello$.subscribe(

            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),

            (data: any) => this.message(data),

            err => console.error(err)

        );
        let hello$1 = this.ds.getleads(this.ds.track);

        hello$1.subscribe(

            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),

            (data: any) => this.message1(data),

            err => console.error(err)

        );
      
        // let hello$1 = this.ds.getleads(this.ds.track);

        // hello$.subscribe(

        //     // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),

        //     (data: any) => this.message1(data),

        //     err => console.error(err)

        // );
        // this.adminAnew.push(this.leada,this.leadb,this.leadc);
        // this.adminAadd.push(this.leadd,this.leade,this.leadf);
        
       
       

        
  }
  cmpids:number[]=[]
  message1  (data2:any){
  
    for(let index in data2){
      if(data2[index].adminname==null){
        // this.datas.push(data2[index].empname)
        this.adminAnew.push(data2[index].lcmpname)
        this.cmpids.push(data2[index].leadid)
      }
      
    

    }

    console.log(this.adminAnew);

   

}
selected(event:any){
  console.log(event)
  const num=this.adminAnew.indexOf(event)
  const s=new userleads()
  console.log(s)
  s.lcmpname=event 
  s.leadid=this.cmpids[num]
  s.adminname=this.ds.track.leadadminname
  s.leadadminid=this.ds.track.leadadminid
  console.log(s.leadadminid)
  console.log(s+"hii")
  let hello$12 = this.ds.addthelead(s);

        hello$12.subscribe(

            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),

            (data: any) => this.message3(data),

            err => console.error(err)

        );
}

rejected(event:any){
  if(this.ds.track.lrole=="ceo"){
  console.log(event)
  const num=this.adminAadd.indexOf(event)
  const s=new userleads()
  s.lcmpname=event 
  s.leadid=this.admidAddids[num]
  s.adminname=this.ds.track.leadadminname
  s.leadadminid=this.ds.track.lid
  console.log(s)
  console.log("leeed")
  let hello$12 = this.ds.changeadmin(s);

        hello$12.subscribe(

            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),

            (data: any) => this.message3(data),

            err => console.error(err)

        );
  }
      

}
message3(data:any){
  console.log(data);
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['assignwork']);
}); 
}
datas:string[]=[];
  message(data2:any){
      console.log(data2)
      for(let index in data2){
        if(data2[index].emprole=="Admin")
        if(!this.empids.includes(data2[index].empid)){
          this.datas.push(data2[index].empname)
          this.empids.push(data2[index].empid)
        }
  
      }
  
      console.log(this.datas);
  
     
  
  }
  admidAddids:number[]=[]
  message2(data2:any){
    this.adminAadd=[]
    this.admidAddids=[]
    console.log(data2)
    for(let index in data2){
      console.log(this.ds.track)
    if(data2[index].leadadminid==this.ds.track.leadadminid){
      this.adminAadd.push(data2[index].lcmpname)
      this.admidAddids.push(data2[index].leadid)
    }
    console.log(this.adminAadd)
  }
  }
  leada:any="American Embassy";
  leadb:any="Hdfc Bank";
  leadc:any="Tata services";
  leadd:any="Vels University";
  leade:any="Eduvantage private ltd";
  leadf:any="Spinebiz Solutions";
  leadg:any="Appstars Limited";
  leadh:any="Relaince Market";
  leadi:any="Apple appstore";
  adminAnew:any[]=[];
  adminAadd:any[]=[];
  
  

  showalready(event:any)
  {
    //   this.changeDetector.detectChanges();
    //   setInterval(() => {
    //     this.changeDetector.reattach();
    //     this.changeDetector.detectChanges();
    //     this.changeDetector.detach();
  
    //   }, 1000);
    //   let printContents, popupWin;
    //   if (this.printSectionRef && this.printSectionRef.nativeElement){
    //     //   this.changeDetector.detectChanges();
    //       printContents = this.printSectionRef.nativeElement.innerHTML;  
    //       console.log(1);
    //     }
    // console.log(printContents);
    // // this.changeDetector.detectChanges();
    
}
display:boolean=false;
shownew(event:any)
{
      console.log(event.target.value); 
      let k:string = event.target.value;
      console.log(k)
      console.log(this.datas)
      const num=this.datas.indexOf(k)
      this.ds.track.leadadminname=k;
      this.ds.track.leadadminid=this.empids[num]
      this.adminid=this.empids[num]
      console.log("------")
      console.log(this.ds.track)
      console.log(this.empids)
      console.log(this.ds.track.leadadminid)
      this.display=true;
      let hello$12 = this.ds.gettheleads(this.ds.track);

        hello$12.subscribe(

            // (data: any) => (this.k=data.result)?alert("Sign Up Successfull"):alert(data.mess),

            (data: any) => this.message2(data),

            err => console.error(err)

        );
      
}

shiftleads(event:any)
{
    // console.log(document.getElementById("button2")?.innerHTML);
      //   this.changeDetector.detectChanges();
    //   setInterval(() => {
    //     this.changeDetector.reattach();
    //     this.changeDetector.detectChanges();
    //     this.changeDetector.detach();
  
    //   }, 1000);
    //   let printContents, popupWin;
    //   if (this.printSectionRef && this.printSectionRef.nativeElement){
    //     //   this.changeDetector.detectChanges();
    //       printContents = this.printSectionRef.nativeElement.innerHTML;  
    //       console.log(1);
    //     }
    // console.log(printContents);
    // // this.changeDetector.detectChanges();
    console.log(event);
}
  


}



