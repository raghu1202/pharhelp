import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-doctoravailability',
  templateUrl: './doctoravailability.component.html',
  styleUrls: ['./doctoravailability.component.css']
})
export class DoctoravailabilityComponent implements OnInit {
doctoravailability:docavailable[]=[]
  constructor(public userservice:UserService) { }

  ngOnInit(): void {
    this.getavailability();
  }

  getavailability(){
    this.userservice.getdoctoravailability().subscribe(
    (resp:any)=>{this.doctoravailability=resp},
(error)=>(console.log(error)))
  }
}

export class docavailable{
  hname!:string;
  doctorname!:string;
  location!:string;
  appointment!:string;
  time!:string;
  slots!:string;
}