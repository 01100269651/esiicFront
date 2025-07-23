import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { StoresService } from 'src/it-sector/Services/stores.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { KindTypes } from 'src/shared/Interfaces/kind-types';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';


@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent {

  storeForm!:FormGroup;
 
  kinds: KindTypes[] = [
    {id:1,name:'قيمة'},
    {id:2,name:'رسوم'},
    {id:3,name:'جمرك'}
  ];

  storesCodes: KindTypes[] = [
    {id:0,name:'خامات رئيسية'},
    {id:1,name:'خ مساعدة'},
    {id:2,name:'وقود'},
    {id:3,name:'ق غ صيانة'},
      {id:4,name:'م ومهمات'},
      {id:5,name:'م تعبئة' },
      {id:6,name:'مخلفات'},
      {id:7,name:'زيوت'},
      {id:8,name:'مركزى قوص'},
      {id:9,name:' أخري'}
      
     

  ];
  //=========================
  
  localCodes: KindTypes[] = [

    {id:1,name:' محلي'},

    {id:2,name:'مستورد'},
   
      
     

  ];
  constructor(private fb:FormBuilder ,private toastr: ToastrService,private strSer:StoresService ,

    private usrCtrl:UserContrlService ,

    private entertotab:EnterToTabService

  ){

    
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.storeForm = this.fb.group({

      Id :['',[Validators.required,Validators.maxLength(12),Validators.minLength(12)]],
    
      Name:['',Validators.required],

      Account1:['',Validators.required],

      Account2:['',Validators.required],

      Kind_Code:['',Validators.required],

      Kind_Name:[''],

      Local_Code :['',Validators.required],
      
      Local_Name :[''],

      Store_Code:['',Validators.required],

      StoreCode_Name :['']  
    });

    //
  
    this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة أكواد المخازن  ',Action:'open window ',Order:'',Order_Type:'',
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
        console.log(Response);
      });


    //
  
}
onKindCodeChange(event: any) {
  this.storeForm.get('Kind_Code')?.setValue( event.value);
  console.log(this.storeForm.get('Kind_Code')?.value);
  // Add any additional logic you need to handle the radio button selection change
}
/////===============================================
onStoreCodeChange(event: any){
  this.storeForm.get('Store_Code')?.setValue( event.value);
}
/////////////////////////////////////
onLocalCodeChange(event: any){
  this.storeForm.get('Local_Code')?.setValue( event.value);
  console.log(this.storeForm.get('Local_Code')?.value);
}
//==============================================================
get Id(){ return this.storeForm.get('Id');}
//================================
get Name(){  return this.storeForm.get('Name'); }
//======================================================
get Account1(){  return this.storeForm.get('Account1'); }
//======================================================
get Account2(){  return this.storeForm.get('Account2'); }
//======================================================
// get Kind_Code(){  return this.storeForm.get('Kind_Code'); }
//=================================================================
get Kind_Name(){  return this.storeForm.get('Kind_Name'); }
//=================================================================
get Local_Code(){  return this.storeForm.get('Local_Code'); }
//======================================================
get Local_Name(){  return this.storeForm.get('Local_Name'); }
//=================================================================
// get Store_Code(){  return this.storeForm.get('Store_Code'); }
//=================================================================
get StoreCode_Name(){  return this.storeForm.get('StoreCode_Name'); }
//=================================================================

ClearForm(){

  this.storeForm.reset();
}
//===================================================

getStoreById(){
  this.strSer.GetSoreById(this.Id?.value).subscribe(
 
    (Response: any) => {

      //this.iap=Response;
      
      console.log(Response);
      

      
      this.storeForm.get('Name')?.setValue(Response.name);
      //
      this.storeForm.get('Account1')?.setValue(Response.account1);
      //eng_No
      this.storeForm.get('Account2')?.setValue(Response.account2);
      //
      this.storeForm.get('Kind_Code')?.setValue(Response.kind_Code);
      //
      this.storeForm.get('Local_Code')?.setValue(Response.local_Code);
      //unit_Id
       //
       this.storeForm.get('Store_Code')?.setValue(Response.store_Code);
      
      this.toastr.warning("الصنف موجود"," رسالة من قاعدة البيانات",{progressBar:true});

    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }


  );

}
///====================================================
addStore(){
  if(this.storeForm.valid)
  {
 
   console.log(this.storeForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.strSer.addStore(this.storeForm.value).subscribe(
     next => {
 
       // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
       // var appName=sessionStorage.getItem('grName');
       // this.rout.navigate(['userLogin',appName]);
       this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
 //////////////////////////////////
 this.usrCtrl.getIPAddress().subscribe(
 
  (x: any) => {

    //this.iap=Response;
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة أكواد المخازن  ',Action:'اضافة ',Order:'',Order_Type:'',


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
    
    console.log(Response);
  });

 

       //////////////////////
 
     },
     
     error => {
 
      this.toastr.error("خطأ","خطأ");

      console.log(error);
     
     
     
     }
 
 
   );
 
 
 
  }

  else this.toastr.warning("من فضلك استكمل البيانات","تنبيه")



}

//=================================7


///====================================================
updStore(){
  if (this.storeForm.valid) {

    console.log(this.storeForm.value);
    this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });

    this.strSer.updStore(this.storeForm.value).subscribe(
      next => {

        // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
        // var appName=sessionStorage.getItem('grName');
        // this.rout.navigate(['userLogin',appName]);
        this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
        this.usrCtrl.getIPAddress().subscribe(
 
          (x: any) => {
        
            //this.iap=Response;
            let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
        
            Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
        
            Win_Name:'شاشة أكواد المخازن  ',Action:'تعديل',Order:'',Order_Type:'',
        
        
              Ip_Address: x.ip
            };
           
            // console.log(ctrl.Order);
            this.usrCtrl.addCtrl(ctrl).subscribe(
              next => {},
              error=>{}
              
        
            );
            
            console.log(Response);
          });
  


      },

      error => {

        this.toastr.error("خطأ", "خطأ");



      }


    );







  }

  else this.toastr.warning('يرجى اسنكمال البيانات', 'انتبه')



}

//==========================================================
delStore(){


  if(this.Id?.value)
  {
     
   this.strSer.delStore(this.Id?.value).subscribe(
    next => {

      // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
      // var appName=sessionStorage.getItem('grName');
      // this.rout.navigate(['userLogin',appName]);
      this.toastr.success("تم الحذف بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});

      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة أكواد المخازن  ',Action:'حذف ',Order:'',Order_Type:'',
      
      
            Ip_Address: x.ip
          };
         
          // console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
          console.log(Response);
        });


    },
    
    error => {

     this.toastr.error("خطأ","خطأ");
    
    
    
    }


  );


  }
  else
  this.toastr.error("يجب إدخال رقم المخزن" ,'رسالة هامة')


}







//=============================


}