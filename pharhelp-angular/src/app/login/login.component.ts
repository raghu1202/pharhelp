import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
              private userAuthService:UserAuthService,
              private router:Router) { }

  ngOnInit(): void {
  } login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admindasboard']);
        } else {
          this.router.navigate(['/userdaseboard']);
        }
        alert("Login Successful")
      },
      (error) => {
        alert("Incorrect Username Or Password");;
      }
    );
    this.userService.userdetails(loginForm.value)
  }
}
