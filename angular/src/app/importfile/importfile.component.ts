import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-importfile',
  templateUrl: './importfile.component.html',
  styleUrls: ['./importfile.component.css']
})
export class ImportfileComponent {
  constructor(private ds:DataserviceService,private router:Router){}
  public userfile:any;
  onSelectFile(event:any)
  {
    const file=event.target.files[0];
    console.log(file);
    this.userfile=file;
  }
  
  saveForm()
  {
    var formData = new FormData();
    formData.append('file',this.userfile);
    let hello$ = this.ds.saveFile(formData);
        hello$.subscribe(
            (data: any) => this.message(data),
            err => console.error(err)
        );
    
    
    alert("File Uploaded Successfully");
    //    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  
    //     this.router.navigate(['admins']);
  
    // });
    
  }
  message(data:any){
    this.ds.imports(this.ds.track).subscribe((response)=>
    {
      console.log(response);
    });
  }

}
