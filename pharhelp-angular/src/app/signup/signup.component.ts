import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  signup(signupForm :NgForm){
    console.log(signupForm.value);
    this.userService.signup(signupForm.value).subscribe(
      (response: any)=>(this.router.navigate(['../registerpage'])
  
    ))
    alert("Registered Successful")
  }}
  (error: any) => {
    alert("Incorrect Username Or Password");
}

