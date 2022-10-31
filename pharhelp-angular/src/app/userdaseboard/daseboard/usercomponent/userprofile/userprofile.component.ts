import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  logindetails:userdetail[]=[];
  profileData:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.logindetails=this.userService.getuserdetails();
    console.log(this.logindetails);
    this.getprofile(this.logindetails);
  }

  getprofile(logindetails: userdetail[]){
    this.userService.getuserprofile(logindetails).subscribe(
     (resp:any)=> {this.profileData=resp;
      console.log(this.profileData);
      },
      (error)=>{console.log(error);}
    )
  }
}
export class userdetail{
 userName!:string;
}
// export class profiledetails{
// userName!: string;
//    userFirstName!: string;
//     userLastName!: string;
//   email!: string
// }