import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-getfeedback',
  templateUrl: './getfeedback.component.html',
  styleUrls: ['./getfeedback.component.css']
})
export class GetfeedbackComponent implements OnInit {
feedbackdetails:feeddetails[]=[]
  constructor(public userservice:UserService) { }

  ngOnInit(): void {
    this.getfeedbackdetails();
  }
getfeedbackdetails(){
  this.userservice.getfeedbackdetail().subscribe(
    (data:any)=>{this.feedbackdetails=data;},
    (error)=>{console.log(error);}
  )
}

}
export class feeddetails{
  userName!:string;
email!:string;
phoneNumber!:string;
comments!:string;

}