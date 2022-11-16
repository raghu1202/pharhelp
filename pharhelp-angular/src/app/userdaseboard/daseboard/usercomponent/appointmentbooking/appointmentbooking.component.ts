import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import jsPDF from 'jspdf';
import { apphistory } from '../bookinghistory/bookinghistory.component';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-appointmentbooking',
  templateUrl: './appointmentbooking.component.html',
  styleUrls: ['./appointmentbooking.component.css']
})
export class AppointmentbookingComponent implements OnInit {
 // booking:apphistory[]=[];
 hospitals:any;
 session:any;
 slots:any;
  doctor:any;
  selectedhospitals:any={

    id:'',name:''

  };
  selectedslots:any={

    id:'',time:''
  }
  
  constructor(private userService:UserService,private router:Router) { }
  captureScreen() {

    let data = document.getElementById('contentToConvert');

    html2canvas(data as any).then(canvas => {

        var imgWidth = 210;

        var pageHeight = 295;

        var imgHeight = canvas.height * imgWidth / canvas.width;

        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');

        let pdfData = new jsPDF('p', 'mm', 'a4');

        var position = 0;

        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)

        pdfData.save(`MyPdf.pdf`);

    });

}
  ngOnInit(): void {
    this.showall();
    this.showall1();
    this.onselect(this.selectedhospitals.id);
    this.onselect1(this.selectedslots.id);
  }
  showall(){
    this.userService.getdroplist().subscribe(
      (data:any)=>{
        this.hospitals=data;
        console.log(this.hospitals);
      }
    )
  }
  onselect(hospitalid:any){
    this.userService.getdroplist().subscribe(
      (res:any)=>{
        this.doctor=res['doctors'].filter(
          (res:any)=>res.hospitalid==hospitalid!.value
        ),
        console.log(this.doctor);      
      }
      )
  }
  showall1(){
    this.userService.getdroplist1().subscribe(
      (data:any)=>{
        this.session=data;
        console.log(this.session);
      }
    )
  }
  onselect1(bookingid:any){
    this.userService.getdroplist1().subscribe(
      (res:any)=>{
        this.slots=res['Slots'].filter(
          (res:any)=>res.bookingid==bookingid!.value
        ),
        console.log(this.slots);      
      }
      )
  }
  appointmentbooking(appbookingForm :NgForm){
    console.log(appbookingForm.value);
    // this.booking=appbookingForm.value
    // const doc:any=new jsPDF('p','pt','a4');
    // doc.text(this.booking);
    // doc.save('test');
    this.userService.postbooking(appbookingForm.value).subscribe(
      
      (resp:any)=>{this.router.navigate(['/userdaseboard/successpage'])}
    );
    alert("Appointment Booked Successful")
    
}

}

