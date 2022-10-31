import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { UniverseComponent } from './universe/universe.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';

const routes: Routes = [
  {path:'',component:UniverseComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"userdaseboard",loadChildren:()=>import('./userdaseboard/userdaseboard.module').then(m=>m.UserdaseboardModule),canActivate:[AuthGuard],data:{roles:['User']}},
  {path:"admindasboard",loadChildren:()=>import('./admindashboard/admindashboard.module').then(m=>m.AdmindashboardModule),canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:"forbidden",component:ForbiddenComponent},
  {path:"logout",component:LogoutComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"registerpage",component:RegisterpageComponent},
  {path:"forgetpage",component:ForgetpageComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"feedbackpage",component:FeedbackpageComponent},
  {path:"**",component:PagenotfoundComponent},
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[LoginComponent,
                                 AboutusComponent,
                                 SignupComponent,
                                 PagenotfoundComponent,
                                UniverseComponent,
                                LogoutComponent,
                                ForgotpasswordComponent,
                                RegisterpageComponent,
                                ForgetpageComponent,
                                FeedbackComponent,
                                FeedbackpageComponent
                                
                         ]