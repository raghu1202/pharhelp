import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { hospital } from '../gethospital/gethospital.component';

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.css']
})
export class AddhospitalComponent implements OnInit {
  hospitaldetails:hospital[]=[];
  constructor(private userService:UserService) { }
  message: any;
  ngOnInit(): void {
    this.forAdmin();
    
  }
  forAdmin(){
    this.userService.forAdmin().subscribe(
      (Response)=>{
        console.log(Response);
        this.message=Response;
     
      },(error)=>{
        console.log(error);
      }
    )
  }
   addhospital(addhospitalForm: NgForm){
     console.log(addhospitalForm.value);
     this.userService.addhospital(addhospitalForm.value).subscribe(
       (response: any)=>{(this.gethospital());}
    )
 }
  gethospital(){
    this.userService.getdoctors().subscribe(
     (resp:any)=> {this.hospitaldetails=resp;
    
    },
     
     (error)=>{console.log(error);}
     
    )

  }


}
