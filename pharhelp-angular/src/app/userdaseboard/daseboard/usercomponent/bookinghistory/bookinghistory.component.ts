import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  appointmenthistory:apphistory[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  history(bookinghistor:any){
    
    console.log(bookinghistor.value);
    this.userService.getbookinghistorry(bookinghistor.value).subscribe(
      (resp:any)=> {this.appointmenthistory=resp;},
      
      (error)=>{console.log(error);}
      
     )
}
deletebookinghis(id:number){
  this.userService.deletebooking(id).subscribe(
    
  )
}
 
}
export class apphistory {
  appid!:number;
  userName!:string;
  hname!:string;
  doctorname!:string;
  slots!:string;
  appointment!:string;
  time!:string;
  location!:string;

}