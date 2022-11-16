import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  postfeedback(feedbackForm:NgForm){
  console.log(feedbackForm.value)
this.userservice.postfeedback(feedbackForm.value).subscribe(
  (data:any)=>this.router.navigate(['feedbackpage'])
)
alert("Feedback Submitted Successful")
}
}

