import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { ItemService } from 'src/it-sector/Services/item.service';
import { MasterService } from 'src/it-sector/Services/master.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { StoresService } from 'src/it-sector/Services/stores.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-add-item-to-master',
  templateUrl: './add-item-to-master.component.html',
  styleUrls: ['./add-item-to-master.component.css']
})
export class AddItemToMasterComponent {
  addToMstrForm!:FormGroup

  constructor(private fb:FormBuilder ,private mastser:MasterService, private fact:SCMFactService,private stor:StoresService,
              private itmser:ItemService ,
              private entertotab:EnterToTabService,
              private toastr:ToastrService ,private usrCtrl:UserContrlService ){


                
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
    this.addToMstrForm = this.fb.group({

      Fact_Id :['',Validators.required],
    
      Store_Id:['',Validators.required],

      Item_No:['',Validators.required]
    
    });

//======================================================


this.usrCtrl.getIPAddress().subscribe(
 
  (Response: any) => {

    //this.iap=Response;
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة إضافة الصنف لملف الأرصدة',Action:'open window',Order:'',Order_Type:'',


      Ip_Address: Response.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
    
    console.log(Response);
  });



//===========================
    
    
      

  }


  get Fact_Id(){
    return this.addToMstrForm.get('Fact_Id');
  }

  ///=====================================================================


  get Store_Id(){
    return this.addToMstrForm.get('Store_Id');
  }
  //===========================================================

  get Item_No(){
    return this.addToMstrForm.get('Item_No');
  }

//===========================================

newdMaster(){


  this.addToMstrForm.reset();
}
//========================================================================
//================================================================

addNewMaster(){

  if(this.addToMstrForm.valid)
  {
 
   console.log(this.addToMstrForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.mastser.addMaster(this.addToMstrForm.value).subscribe(
     next => {
 
       // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
       // var appName=localStorage.getItem('grName');
       // this.rout.navigate(['userLogin',appName]);
       this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
 
 
 
     },
     
     error => {
 
      this.toastr.error("خطأ","خطأ");
     
     
     
     }
 
 
   );
 
 
 
  }


}

  ///====================================

  factName()
    {
     // this.fact.GetFactById(this.Fact_Id?.value)

      
    this.fact.GetFactById(this.Fact_Id?.value).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        
        var field = document.getElementById('factName'); 
        var currentValue= field?.getAttribute('value');

        field?.setAttribute('value',Response.name);

        //this.addToMstrForm.get('Name')?.setValue(Response.name);
        
       // this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console

     //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    
      }

  
    );
  

  }

  //////////////////////////////////==============



  //==========================

  storeName(){

    this.stor.GetSoreById(this.Store_Id?.value).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        
        var field = document.getElementById('storeName'); 
        var currentValue= field?.getAttribute('value');

        field?.setAttribute('value',Response.name);

        //this.addToMstrForm.get('Name')?.setValue(Response.name);
        
        //this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console

     //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    
      }

  
    );


  }


  //===========================================

  itemName(){
    this.itmser.GetItem(this.Item_No?.value).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        
        var field = document.getElementById('itemName'); 
        var currentValue= field?.getAttribute('value');

        field?.setAttribute('value',Response.name);

        //this.addToMstrForm.get('Name')?.setValue(Response.name);
        
       // this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console

     //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    
      }

  
    );



  }

  //===========================================

  delAddToMast(){
    if(this.addToMstrForm.valid)
    {
       
     this.mastser.delAddToMast(this.Fact_Id?.value,this.Store_Id?.value,this.Item_No?.value).subscribe(
      next => {
  
        // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
        // var appName=localStorage.getItem('grName');
        // this.rout.navigate(['userLogin',appName]);
        this.toastr.success("تم الحذف بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
  
  
  
      },
      
      error => {
  
       this.toastr.error("خطأ","خطأ");
      
      
      
      }
  
  
    );
  
  
    }
    else
    this.toastr.error("يجب إدخال الاكواد الصحيحة" ,'رسالة هامة')
  
  
  
  
  
  
  }
  




}
