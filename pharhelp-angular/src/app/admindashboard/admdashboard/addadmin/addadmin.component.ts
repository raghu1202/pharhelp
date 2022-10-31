import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { admin } from '../getadmin/getadmin.component';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  admindetails: admin[] = [];
  constructor(private userService:UserService,private router:Router) { }
 
  ngOnInit(): void {
  }
  addadmin(addadminForm:NgForm){
    console.log(addadminForm.value);
    this.userService.addadmin(addadminForm.value).subscribe(
      (response: any)=>{(this.getadmin());}
    )
  }
  getadmin(){
    this.userService.getadmin().subscribe(
     (resp:any)=> {
     this.admindetails=resp;},
     (error)=>{console.log(error);}
     
    )

  }

}

