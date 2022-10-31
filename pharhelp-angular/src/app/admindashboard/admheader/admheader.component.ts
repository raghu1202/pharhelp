import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-admheader',
  templateUrl: './admheader.component.html',
  styleUrls: ['./admheader.component.css']
})
export class AdmheaderComponent implements OnInit {

 
  @Output()taggledEvent:any=new EventEmitter();
  constructor(private userAuthService:UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }
  toggleaction(){
    this.taggledEvent.emit('');
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate([""]);
  }

}
