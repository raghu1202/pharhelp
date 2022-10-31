import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdmindashboardModule } from './admindashboard/admindashboard.module';
import { FooterComponent } from './footer/footer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    FooterComponent,
    ForbiddenComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    RegisterpageComponent,
    ForgetpageComponent,
    FeedbackComponent,
    FeedbackpageComponent,
   
  
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdmindashboardModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,FormsModule,HttpClientModule,RouterModule,FontAwesomeModule
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },UserService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
