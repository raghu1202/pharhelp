import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:9090';
  PATH_OF_API1 = 'http://localhost:8804'
profile:any;
droplist='assets/doctors.json';
droplist1='assets/slots.json';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
    
  ) {}
public postfeedback(feeddata:any){
  return this.httpclient.post(this.PATH_OF_API1+'/user/review',feeddata,{
    headers:this.requestHeader,
  })
}

public deletehospital(id:any){
  return this.httpclient.delete(this.PATH_OF_API+'/admin/deletedoctors/'+id);
}

public deletebooking(id:number){
  return this.httpclient.delete(this.PATH_OF_API+'/user/deletebooking/'+id);
}

public getdroplist() {
  return this.httpclient.get<any>(this.droplist,{
    headers: this.requestHeader,
  });

}
public getdroplist1() {
  return this.httpclient.get<any>(this.droplist1,{
    headers: this.requestHeader,
  });

}

public getdoctoravailability(){
  return this.httpclient.get(this.PATH_OF_API+'/user/all');
}

public getfeedbackdetail(){
  return this.httpclient.get(this.PATH_OF_API+'/admin/review');
}
  public getuserprofile(loginprofileData:any){

    return this.httpclient.get(this.PATH_OF_API+'/user/userdetails',{params: loginprofileData})

  }
  public userdetails(loginData:any){
    this.profile=loginData;
  }

  public getuserdetails(){
    return this.profile;

  }
  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  public signup(signupData:any){
    return this.httpclient.post(this.PATH_OF_API+'/registerNewUser',signupData,{
      headers:this.requestHeader,
    });
    console.log(signupData);
  }

  public addadmin(addadminData:any){
    return this.httpclient.post(this.PATH_OF_API+'/admin/addAdmin',addadminData);

  }
  public getadmin(): Observable<any>  {
    return this.httpclient.get(this.PATH_OF_API+'/admin/getAdmin');
  }
  public addhospital(addhospitalData:any){
    return this.httpclient.post(this.PATH_OF_API+'/admin/doctors',addhospitalData);
  }
  public getdoctors(){
    return this.httpclient.get(this.PATH_OF_API+'/admin/doctors');
  }
 
  public postbooking(appbookingFormdata:any){
    return this.httpclient.post(this.PATH_OF_API+'/user/save-app',appbookingFormdata)
  }
  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }
  public getbookinghistorry(username: any) {
   
    return this.httpclient.get(this.PATH_OF_API+"/user/bookinghistory", {params: username})
    
    }

    public getbookingapp(){
      return this.httpclient.get(this.PATH_OF_API+"/admin/getappointment");
    }
  
public getuserinfo(){
  return this.httpclient.get(this.PATH_OF_API+'/admin/getusers');

}
  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles:  string[]): any{
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}