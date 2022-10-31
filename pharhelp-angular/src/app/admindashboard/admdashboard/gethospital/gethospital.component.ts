import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-gethospital',
  templateUrl: './gethospital.component.html',
  styleUrls: ['./gethospital.component.css']
})
export class GethospitalComponent implements OnInit {
  hospitaldetails:hospital[]=[];
  hospitals: hospital[]=[];
  
  deleteMessage: boolean | undefined;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.gethospital();
  }
  gethospital(){
    this.userService.getdoctors().subscribe(
     (resp:any)=> {this.hospitaldetails=resp;
    
    },
     
     (error)=>{console.log(error);}
     
    )

  }
  deleteBooking(did:number){
    console.log(did);
    this.userService.deletehospital(did).subscribe(
      (res:any)=>{
        this.gethospital();
      }
    );
  
  }
}

export class hospital{
  did!:number;
  hname!:string;
  location!:string;
  name!:string;
  spec!:string;
  in!:string;
  out!:string;
}