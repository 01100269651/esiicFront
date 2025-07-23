import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthGrpService } from 'src/app/security/Services/auth-grp.service';
import { AuthUserService } from 'src/app/security/Services/auth-user.service';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { SCMRoleService } from 'src/it-sector/Services/scm-role.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] =['position','id','name'
    ,'fact','app','role'
  
  
  ]
  isLoading:boolean=false;
  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

  //  this.dataSource.
  }
  selectedFile: any = null;
  uploadFile: any | null;
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  facts: any[] = [];
  apps:any[]=[];
  roles:any[]=[];
  usrSignUpForm!:FormGroup;

  constructor(private fb:FormBuilder ,
    private toastr: ToastrService ,
    private au:AuthUserService , 
    private auGr:AuthGrpService,
    private rout:Router
    ,private usrCtrl:UserContrlService
    ,    private SCMRoleSer:SCMRoleService ,   private entertotab:EnterToTabService
  ,private scmFactSer:SCMFactService){

    
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    
this.usrSignUpForm = this.fb.group({



  Id :['',Validators.required],


  Fact_Id :['',Validators.required],

  AppId :['',Validators.required],

  UserName:['',Validators.required],

  Password :['',Validators.required],

  Con_Password :['',Validators.required],

  Email :[''],

  RoleId :['',Validators.required]



});

     /////////////////////////////////////
     this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة أكواد المستخدمين',Action:'open window',Order:'',Order_Type:'',
    
    
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
  this.scmFactSer.getAllFact().subscribe(
    (Response: any) => {
      this.facts=Response;
    },
            error => {
 
    }


  );

  //========================================================================
    /////////////////////////////////////

    this.auGr.getAllApps().subscribe(

      (response:any)=>{

        console.log(response);

        this.apps=response;

      },
      error=>{

      }
    );

    //=======================================================
this.SCMRoleSer.GetRoles().subscribe(
  (x:any)=>{
    console.log(x);
    this.roles=x;
  },
  error=>{}
);

//========================================
this.au.getAllUser().subscribe(
(response:any)=>{
  this.isLoading=false;
  this.dataSource = new MatTableDataSource(response);
  this.dataSource.data = response;
  this.dataSource.length = response.length;
  this.dataSource.paginator = this.paginator; // Connect the paginator here
  const dataSource = new MatTableDataSource(response);
  dataSource.paginator = this.paginator;
  console.log(response);
  //this.isLoading=false;
  dataSource.data=response;
},
error=>{}

);




  }

 get Id()
{return this.usrSignUpForm.get('Id');}  
get Fact_Id()
{return this.usrSignUpForm.get('Fact_Id');}

get UserName()
{return this.usrSignUpForm.get('UserName');}

get AppId()
{return this.usrSignUpForm.get('AppId');}




get Password()
{return this.usrSignUpForm.get('Password');}


get Con_Password()
{return this.usrSignUpForm.get('Con_Password');}


get Email()
{
return this.usrSignUpForm.get('Email');
}


get RoleId()
{
return this.usrSignUpForm.get('RoleId');
}



/////================================================================================
GetUsrId(){
    this.au.UserById({Id:this.Id?.value}).subscribe(
 
     (Response: any) => {
 
       //this.iap=Response;
       
       console.log((Response));
       
       this.usrSignUpForm.get('Fact_Id')?.setValue(Response.fact_Id);
       
       this.usrSignUpForm.get('AppId')?.setValue(Response.appId);
       
       this.usrSignUpForm.get('UserName')?.setValue(Response.userName);
       //roleId

       this.usrSignUpForm.get('RoleId')?.setValue(Response.roleId);
     //  this.usrSignUpForm.get('SignImge')?.setValue(Response.signImge);

    // this.selectedFile =Response.signImge;
       
  
       this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});
 
 
 
     },
     
     error => {
 
       console.log(error); // Print the error object to the console
 
 
    //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
     
     
     
     }
 
 
   );
 
 
 
 
   
 
 }
 //======================================================





NewUsr(){

this.usrSignUpForm.reset();

}

//=======================================================================================================================

UserSignUp(){


  console.log(this.usrSignUpForm.value);

  if(this.usrSignUpForm.valid)
 {
//   const formData = new FormData();
//   formData.append('Id', this.usrSignUpForm.value.Id );
 
//   formData.append('Fact_Id', this.usrSignUpForm.value.Fact_Id);
//   formData.append('AppId', this.usrSignUpForm.value.AppId);
  
//   formData.append('UserName',this.usrSignUpForm.value.UserName);
  
//   formData.append('Password', this.usrSignUpForm.value.Password);
//   formData.append('Email', this.usrSignUpForm.value.Email);
//   formData.append('RoleId', this.usrSignUpForm.value.RoleId);

//  formData.append('SignImge', this.usrSignUpForm.value.SignImge);
  

//  console.log(formData)

  this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});

  this.au.UserSignUp(this.usrSignUpForm.value).subscribe(
    next => {

      this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
    },
    
    error => {

     this.toastr.error("خطأ","خطأ");
    }  ); }
 else 
 this.toastr.warning("البيانات غير مكتملة ","انتبه",{progressBar:true});
}

///////////////////////////////////////////
UserUpdate(){


  if(this.usrSignUpForm.valid)
  {
 
   console.log(this.usrSignUpForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.au.UserUpdate(this.usrSignUpForm.value).subscribe(
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
///////////////////////////////////////////////////////////////////////////

UserDel(){

  if(this.Id?.value)
  {
     
   this.au.DelUsr({Id:this.Id?.value}).subscribe(
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

// onFileChange(event: any) {
//   const file = event.target.files[0] as File;
//   this.usrSignUpForm.patchValue({ SignImge: file });
//   // console.log(this.SignImge?.value)
// }

//===============================


  
}
