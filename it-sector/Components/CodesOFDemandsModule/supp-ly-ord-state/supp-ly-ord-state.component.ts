import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { SupOrdStatesService } from 'src/it-sector/Services/sup-ord-states.service';
import { SupplyOrdService } from 'src/it-sector/Services/supply-ord.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-supp-ly-ord-state',
  templateUrl: './supp-ly-ord-state.component.html',
  styleUrls: ['./supp-ly-ord-state.component.css']
})
export class SuppLyOrdStateComponent {
  
SupOrdStatForm!:FormGroup;


constructor(private fb: FormBuilder, 
  private entertotab:EnterToTabService,
  private toastr: ToastrService, 
  private SupOrdStService: SupOrdStatesService ,private usrCtrl:UserContrlService) {


    
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

      
  this.SupOrdStatForm = this.fb.group({

    Code: ['', [Validators.required, Validators.maxLength(4)]],


    Name: ['', Validators.required],



  });
  //==============================
  /////////////////////////////////////
 
      /////////////////////////////////////
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:' شاشة أكواد موقف الطلبات ',Action:'open window',Order:'',Order_Type:'',
      
      
            Ip_Address: x.ip
          };
         
          // console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
          console.log(Response);
        });
    /////////////////////////////////////
        
    

}
get Code() {
  return this.SupOrdStatForm.get('Code');
}

//=========================================================
get Name() { return this.SupOrdStatForm.get('Name'); }
/////////////////////////////======================================


getStatById(){

  this.SupOrdStService.GetStatById(this.Code?.value).subscribe(

    (Response: any) => {
      //this.iap=Response;
      console.log(Response);
      this.SupOrdStatForm.get('Name')?.setValue(Response.name);
      this.toastr.warning("الكود مستخدم", " رسالة من قاعدة البيانات", { progressBar: true });
    },
    error => {
      console.log(error); // Print the error object to the console
      //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    });
}
///////////////////////////////////////////
ClearForm(){
  this.SupOrdStatForm.reset()
}

////////////////////////////////////////////
addState(){


  if (this.SupOrdStatForm.valid) {

    console.log(this.SupOrdStatForm.value);
    this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
    this.SupOrdStService.addState(this.SupOrdStatForm.value).subscribe(
      next => {
        this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
      },
      error => {
        this.toastr.error("خطأ", "خطأ");
        console.log(error);
      } );  }
     else this.toastr.warning("من فضلك استكمل البيانات", "تنبيه");  }

     //////////////////////////////////////////////
updState(){

if (this.SupOrdStatForm.valid) {
  console.log(this.SupOrdStatForm.value);
  this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
  this.SupOrdStService.updState(this.SupOrdStatForm.value).subscribe(
    next => {
      // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
      // var appName=sessionStorage.getItem('grName');
      // this.rout.navigate(['userLogin',appName]);
      this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
    },
    error => {
      this.toastr.error("خطأ", "خطأ");
    }
  );
}
else this.toastr.warning('يرجى اسنكمال البيانات', 'انتبه');


}

////=======================================
delState(){

if (this.Code?.value) {

  this.SupOrdStService.delState(this.Code?.value).subscribe(
    next => {
      this.toastr.success("تم الحذف بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
    },
    error => {
      this.toastr.error("خطأ", "خطأ");
    }
  );
}
else
  this.toastr.error("يجب إدخال الكود", 'رسالة هامة')
}


}
