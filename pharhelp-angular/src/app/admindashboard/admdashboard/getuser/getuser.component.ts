import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

    userdetails:user[]=[];
    constructor(private userService:UserService) { }
  
    ngOnInit(): void {
      this.getuser();
    }
    getuser(){
      this.userService.getuserinfo().subscribe(
       (resp:any)=> {this.userdetails=resp;
      
      },
       
       (error)=>{console.log(error);}
       
      )
  
    }
  }
  export class user{
   userName!: string;
   userFirstName!: string;
    userLastName!: string;
  email!: string
  }