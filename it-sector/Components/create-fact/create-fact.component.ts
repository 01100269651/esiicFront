import { Component, ErrorHandler, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-create-fact',
  templateUrl: './create-fact.component.html',
  styleUrls: ['./create-fact.component.css']
})
export class CreateFactComponent {
  factForm!:FormGroup;
  displayedColumns: string[] =['position','id','name'
  
  
    ]
    isLoading:boolean=false;
    dataSource:any;
    @ViewChild (MatPaginator) paginator!: MatPaginator;

  

  constructor(private fb:FormBuilder,
    private entertotab:EnterToTabService,
    private usr:UserContrlService 
    ,private toastr: ToastrService, private au:SCMFactService
    ,private usrCtrl:UserContrlService){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.factForm = this.fb.group({

      Id :['',Validators.required],
        
      Name:['',Validators.required],

      Image:[' ']
    
    });
       /////////////////////////////////////
   this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة أكواد المصانع ',Action:'open window',Order:'',Order_Type:'',
  
  
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
 
this.au.getAll().subscribe(
  (response:any)=>{
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

////////////////
      

  }
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get Id()
  {return this.factForm.get('Id');}


  ////========================================================================================================================


  get Name()
  {return this.factForm.get('Name');}


  ////===========================================================================================================================


  GetFactById(){



    this.au.GetFactById(this.Id?.value).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        

        
        this.factForm.get('Name')?.setValue(Response.name);
        
        this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console

     //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    
      }

  
    );
  

  }
  ////========================================================================================================================

  newFact(){

    this.factForm.reset();
  }
//===========================================================================================================================
createFact(){
 // console.log(this.factForm.valid);
 this.usrCtrl.getIPAddress().subscribe(
 
  (x: any) => {

    //this.iap=Response;
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:' إضافة  ',Action:'open window',Order:'',Order_Type:'',


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


  if(this.factForm.valid)
  {
 
   console.log(this.factForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.au.AddFact(this.factForm.value).subscribe(
     next => {
 
       // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
       // var appName=sessionStorage.getItem('grName');
       // this.rout.navigate(['userLogin',appName]);
       this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
 
 
 
     },
     
     error => {
 
      this.toastr.error("خطأ","خطأ");
     
     
     
     }
 
 
   );
 
 
 
  }

}

//==============================================================================================================================
updateFact(){
  //

  this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة أكواد المصانع ',Action:'تعديل ',Order:'',Order_Type:'',
  
  
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
 

  /////////////////////////////////////

  if(this.factForm.valid)
  {
 
   console.log(this.factForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.au.UpdFact(this.factForm.value).subscribe(
     next => {
 
       // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
       // var appName=sessionStorage.getItem('grName');
       // this.rout.navigate(['userLogin',appName]);
       this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
 
 
 
     },
     
     error => {
 
      this.toastr.error("خطأ","خطأ");
     
     
     
     }
 
 
   );
 
 
 
  }



}

//========================================================================================================================\

delFact(){

  this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة أكواد المصانع ',Action:'حذف ',Order:'',Order_Type:'',
  
  
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
 


  if(this.Id?.value)
  {
     
   this.au.delFact(this.Id?.value).subscribe(
    next => {

      // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
      // var appName=sessionStorage.getItem('grName');
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



