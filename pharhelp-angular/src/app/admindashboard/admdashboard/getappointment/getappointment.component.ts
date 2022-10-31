import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-getappointment',
  templateUrl: './getappointment.component.html',
  styleUrls: ['./getappointment.component.css']
})
export class GetappointmentComponent implements OnInit {
bookinghistory:booking[]=[]
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.gethistory();
  }
gethistory(){
  this.userservice.getbookingapp().subscribe(
    (data:any)=>{this.bookinghistory=data;},
    (error)=>{console.log(error);}
  )
}
}
export class booking{
  userName!:string;
  hname!:string;
  doctorname!:string;
time!:string;
slots!:string;
location!:string;
appointment!:string;
}