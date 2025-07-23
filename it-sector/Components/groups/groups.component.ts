import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAppGroup } from 'src/app/security/Models/iapp-group';
import { AuthGrpService } from 'src/app/security/Services/auth-grp.service';
import { environment } from 'src/environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent {
  displayedColumns: string[] =['position','id','app_Name'
  
  
  ]
  isLoading:boolean=false;
  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

  //  this.dataSource.
  }
  apps:any[]=[];
  grSignUpForm!:FormGroup;

  iap!:IAppGroup;

  constructor(private fb:FormBuilder ,private toastr: ToastrService
     ,private au:AuthGrpService , private rout:Router ,    private entertotab:EnterToTabService,
    private usrCtrl:UserContrlService){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
this.grSignUpForm = this.fb.group({

  Id :['',Validators.required],

  App_Name:['',Validators.required],

  App_Password :['',Validators.required],
  Con_App_Password :['',Validators.required],


});

     /////////////////////////////////////
     this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة أكواد التطبيقات',Action:'open window',Order:'',Order_Type:'',
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
        console.log(Response);
      });

  
  //=========================================
this.au.getAllApps().subscribe(
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

  }
  ,
  error=>{}
);

  //===============================================
  }

 get Id()
{
return this.grSignUpForm.get('Id');

}  

get App_Name()
{
return this.grSignUpForm.get('App_Name');



}

get App_Password()
{
return this.grSignUpForm.get('App_Password');

}

get Con_App_Password()
{
return this.grSignUpForm.get('Con_App_Password');

}




GrSignUp(){

  if(this.grSignUpForm.valid)
 {
  this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});

  this.au.GroupSignUp(this.grSignUpForm.value).subscribe(
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


FillGrp(){




   this.au.GrpById(this.grSignUpForm.value).subscribe(

    (Response: any) => {

      //this.iap=Response;
      console.log((Response));
      
      this.grSignUpForm.get('App_Name')?.setValue(Response.name);
      this.grSignUpForm.reset(this.grSignUpForm.value);
      
      
      //this.myReactiveForm.reset(this.myReactiveForm.value);
      //console.log(Response); // Print the response object to the console
      // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
      // var appName=sessionStorage.getItem('grName');
      // this.rout.navigate(['userLogin',appName]);
      
      
      this.toastr.error("التطبيق موجود"," رسالة من قاعدة البيانات",{progressBar:true});



    },
    
    error => {

      console.log(error); // Print the error object to the console


     this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    
    
    
    }


  );




  

}




GrUpdate(){
  if(this.grSignUpForm.valid)
 {

  console.log(this.grSignUpForm.value);
  this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});

  this.au.GrUpdate(this.grSignUpForm.value).subscribe(
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



  }



