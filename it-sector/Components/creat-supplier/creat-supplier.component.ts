import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { SupplierService } from 'src/it-sector/Services/supplier.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-creat-supplier',
  templateUrl: './creat-supplier.component.html',
  styleUrls: ['./creat-supplier.component.css']
})
export class CreatSupplierComponent {
  SupplierForm!:FormGroup

  constructor(private fb:FormBuilder ,
    private entertotab:EnterToTabService
    ,private toastr: ToastrService ,private supService:SupplierService,
    private usrCtrl:UserContrlService){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.SupplierForm = this.fb.group({

      Tax_ID_No :['',[Validators.required,Validators.maxLength(9),Validators.minLength(9)]],
    
      Sup_Id:['0'],

      Name:['',Validators.required],

      Tax_Org_No :['',Validators.required],
      
      Address:['',Validators.required],

      Mobile1:['',[Validators.minLength(11),Validators.pattern("^[0-9]*$")]],

      Email:['',Validators.email],
      
      Bank_Type:['',Validators.required],
      
      Bank_No:['',Validators.required]
    
    });
    //==============================
    /////////////////////////////////////
  

       /////////////////////////////////////
       this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة أكواد الموردين',Action:'open window',Order:'',Order_Type:'',
      
      
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
     
    /////////////////////////////===================
   
      

  }
  get Tax_ID_No() {
    return this.SupplierForm.get('Tax_ID_No');
  }

  //=========================================================
  get Name() { return this.SupplierForm.get('Name'); }

  //=========================================================
  get Sup_Id() { return this.SupplierForm.get('Sup_Id'); }
  //============================================================
  get Tax_Org_No() { return this.SupplierForm.get('Tax_Org_No'); }
  //============================================================
  get Address() { return this.SupplierForm.get('Address'); }
  //============================================================
  get Email() { return this.SupplierForm.get('Email'); }
  //============================================================
  get Bank_Type() { return this.SupplierForm.get('Bank_Type'); }
  //============================================================

  get Bank_No() { return this.SupplierForm.get('Bank_No'); }
  //============================================================


  get Mobile1() { return this.SupplierForm.get('Mobile1'); }

    //===============================

  supName() {
    this.supService.GetSupById(this.Tax_ID_No?.value).subscribe(

      (Response: any) => {

        //this.iap=Response;

        console.log(Response);



        this.SupplierForm.get('Name')?.setValue(Response.name);
        //
        this.SupplierForm.get('Tax_Org_No')?.setValue(Response.tax_Org_No);
        //eng_No
        this.SupplierForm.get('Address')?.setValue(Response.address);
        //
        this.SupplierForm.get('Mobile1')?.setValue(Response.mobile1);
        //
        this.SupplierForm.get('Email')?.setValue(Response.email);
        //unit_Id
        //
        this.SupplierForm.get('Bank_Type')?.setValue(Response.bank_Type);

        this.SupplierForm.get('Bank_No')?.setValue(Response.bank_No);

        

        this.toastr.warning("المورد موجود", " رسالة من قاعدة البيانات", { progressBar: true });

      },

      error => {

        console.log(error); // Print the error object to the console

        //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");

      }


    );



  }
    ///========================
    NewSupp(){
      this.SupplierForm.reset();
    }

    ///==============================================

    addSupp() {

    if (this.SupplierForm.valid) {

      console.log(this.SupplierForm.value);
      this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
      this.supService.addSup(this.SupplierForm.value).subscribe(
        next => {
          this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
        },
        error => {
          this.toastr.error("خطأ", "خطأ");
          console.log(error);
        }
      );
    }
   
   
    else this.toastr.warning("من فضلك استكمل البيانات", "تنبيه")
  
  
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  updSupp() {
    if (this.SupplierForm.valid) {
      console.log(this.SupplierForm.value);
      this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
      this.supService.updSup(this.SupplierForm.value).subscribe(
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
    else this.toastr.warning('يرجى اسنكمال البيانات', 'انتبه')
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  delSup(){
    if (this.Tax_ID_No?.value) {

      this.supService.delSup(this.Tax_ID_No?.value).subscribe(
        next => {
          this.toastr.success("تم الحذف بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
        },
        error => {
          this.toastr.error("خطأ", "خطأ");
        }
      );
    }
    else
      this.toastr.error("يجب إدخال رقم المخزن", 'رسالة هامة')
  }





 


}
