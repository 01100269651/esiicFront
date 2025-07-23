import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { CostService } from 'src/it-sector/Services/cost.service';
import { DeptService } from 'src/it-sector/Services/dept.service';
import { OrdTypesService } from 'src/it-sector/Services/ord-types.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-create-cost',
  templateUrl: './create-cost.component.html',
  styleUrls: ['./create-cost.component.css']
})
export class CreateCostComponent {
  displayedColumns: string[] =['position','id','name'
  
  
  ]
  isLoading:boolean=false;
  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;


  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
console.log(filterValue.trim())
  //  this.dataSource.
  }
costForm!:FormGroup;
constructor(private fb:FormBuilder ,   private entertotab:EnterToTabService,
    private toastr:ToastrService ,private costser:CostService , private usrCtrl:UserContrlService )
   {
    
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

this.costForm = this.fb.group({

Id :['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],

Name:['',Validators.required]

});
   /////////////////////////////////////
   this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(localStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة أكواد مراكز التكاليف',Action:'open window',Order:'',Order_Type:'',
  
  
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

this.costser.getAllCosts().subscribe(

  (response:any)=>{
    // console.log(x);

    this.isLoading=false;
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.data = response;
    this.dataSource.length = response.length;
    this.dataSource.paginator = this.paginator; // Connect the paginator here
    const dataSource = new MatTableDataSource(response);
    dataSource.paginator = this.paginator;
    console.log(dataSource);
    //this.isLoading=false;
    dataSource.data=response;

  },

  error=>{

  }
);
 


//=============================================================
}
////////////////////////////////////////

get Name(){
  return this.costForm.get('Name');
}


/////////////////////////////////////
get Id(){
  return this.costForm.get('Id');
}
///////////////////////////////////////////////////////////////
costName(){
  this.costser.GetCostById(this.Id?.value).subscribe(
 
    (Response: any) => {

      //this.iap=Response;
      
      console.log(Response);
      this.costForm.get('Name')?.setValue(Response.name);
       

     
      
      // var field = document.getElementById('itemName'); 
      // var currentValue= field?.getAttribute('value');

      // field?.setAttribute('value',Response.name);

      //this.addToMstrForm.get('Name')?.setValue(Response.name);
      
     // this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});

    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }


  );

}

  //////////////////////////////////////////////////////////////////////
  NewCost(){
   
    this.costForm.reset();
  
  }
  ///////////////////////////////////////////////////////
  addCost(){


    if(this.costForm.valid)
    {
   
     console.log(this.costForm.value);
     this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
   
     this.costser.addCost(this.costForm.value).subscribe(
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

  /////////////////////////////////////////////////

  updCost(){

    if(this.costForm.valid)
    {
   
     console.log(this.costForm.value);
     this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
   
     this.costser.updCost(this.costForm.value).subscribe(
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

  //////////////////////////////////////////
  delCost(){

    if(this.Id?.value)
    {
       
     this.costser.delCost(this.Id?.value).subscribe(
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
    this.toastr.error("يجب إدخال رقم المستخدم" ,'رسالة هامة')
  
  }

 

}
///////////////===================================================================



