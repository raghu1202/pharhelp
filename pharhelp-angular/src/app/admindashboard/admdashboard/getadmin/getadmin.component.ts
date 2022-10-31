import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-getadmin',
  templateUrl: './getadmin.component.html',
  styleUrls: ['./getadmin.component.css']
})
export class GetadminComponent implements OnInit {
  admindetails:admin[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getadmin();
  }
  getadmin(){
    this.userService.getadmin().subscribe(
     (resp:any)=> {
     this.admindetails=resp;},
     (error)=>{console.log(error);}
     
    )}
    

}
export class admin{
  userName!:string;
  userFirstName!: string;
  userLastName!:string;
}
