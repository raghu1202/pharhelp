import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmdashboardComponent } from './admdashboard/admdashboard.component';
import { AdmheaderComponent } from './admheader/admheader.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddhospitalComponent } from './admdashboard/addhospital/addhospital.component';
import { AddadminComponent } from './admdashboard/addadmin/addadmin.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { GetadminComponent } from './admdashboard/getadmin/getadmin.component';
import { GethospitalComponent } from './admdashboard/gethospital/gethospital.component';
import { GetuserComponent } from './admdashboard/getuser/getuser.component';
import { GetappointmentComponent } from './admdashboard/getappointment/getappointment.component';
import { GetfeedbackComponent } from './admdashboard/getfeedback/getfeedback.component';



const routes: Routes = [
  {path:"",component:AdmdashboardComponent,
  children:[{path:"addhospital",component:AddhospitalComponent},
  {path:'',component:AddhospitalComponent},
  {path:"addadmin",component:AddadminComponent},
  {path:"getadmin",component:GetadminComponent},
{path:"getdoctors",component:GethospitalComponent},
 {path:"getuser",component:GetuserComponent},
 {path:"getappointment",component:GetappointmentComponent},
 {path:"getfeedback",component:GetfeedbackComponent}
   ]
  }
]

@NgModule({
  declarations: [
    AdmdashboardComponent,
    AdmheaderComponent,
    AddhospitalComponent,
    AddadminComponent,
    GetadminComponent,
    GethospitalComponent,
    GetuserComponent,
    GetappointmentComponent,
    GetfeedbackComponent
    
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),MatToolbarModule,MatIconModule,
    MatButtonModule,MatSidenavModule,MatListModule,MatCardModule,CdkAccordionModule,
    MatFormFieldModule,MatSelectModule,FormsModule
  ]
})
export class AdmindashboardModule { }
