import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaseboardComponent } from './daseboard/daseboard.component';

import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AppointmentbookingComponent } from './daseboard/usercomponent/appointmentbooking/appointmentbooking.component';
import { HeaderComponent } from './header/header.component';
import { UserhomeComponent } from './daseboard/usercomponent/userhome/userhome.component';
import { BookinghistoryComponent } from './daseboard/usercomponent/bookinghistory/bookinghistory.component';
import { UserprofileComponent } from './daseboard/usercomponent/userprofile/userprofile.component';
import { FormsModule } from '@angular/forms';
import { SuccesspageComponent } from './daseboard/usercomponent/successpage/successpage.component';
import { DoctoravailabilityComponent } from './daseboard/usercomponent/doctoravailability/doctoravailability.component';
import { ResetpasswordComponent } from './daseboard/usercomponent/resetpassword/resetpassword.component';
import { ResetpageComponent } from './daseboard/usercomponent/resetpage/resetpage.component';





const routes: Routes = [
  {
    path:"",component:DaseboardComponent,
    children:[{path:"appointmentbooking",component:AppointmentbookingComponent},
               {path:"",component:UserhomeComponent},
               {path:"bookinghistory",component:BookinghistoryComponent},
               {path:"userhome",component:UserhomeComponent},
               {path:"userprofile",component:UserprofileComponent},
               {path:"successpage",component:SuccesspageComponent},
               {path:"doctoravailability",component:DoctoravailabilityComponent},
               {path:"resetpassword",component:ResetpasswordComponent},
               {path:"resetpage",component:ResetpageComponent}               
  ]
  },
  
]

@NgModule({
  declarations: [
    DaseboardComponent,
    
    AppointmentbookingComponent,
    HeaderComponent,
    UserhomeComponent,
    BookinghistoryComponent,
    UserhomeComponent,
    UserprofileComponent,
    SuccesspageComponent,
    DoctoravailabilityComponent,
    ResetpasswordComponent,
    ResetpageComponent
  
   
   
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),MatToolbarModule,MatIconModule,
    MatButtonModule,MatSidenavModule,MatListModule,MatCardModule,FormsModule

  ]
})
export class UserdaseboardModule { }
