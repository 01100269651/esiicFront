import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { DeptService } from 'src/it-sector/Services/dept.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-main-depts',
  templateUrl: './main-depts.component.html',
  styleUrls: ['./main-depts.component.css']
})
export class MainDeptsComponent {
  
  displayedColumns: string[] =['position','id','name'
  
  
  ]
  isLoading:boolean=false;
  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

  //  this.dataSource.
  }
 
  deptsForms!:FormGroup;
  
constructor(private fb: FormBuilder,
  private entertotab:EnterToTabService,
  private toastr: ToastrService, private deptService: DeptService ,private usrCtrl:UserContrlService) {


    
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
  this.deptsForms = this.fb.group({

    Id: ['', [Validators.required, Validators.maxLength(4)]],


    Name: ['', Validators.required],



  });
  //==============================
  /////////////////////////////////////
  this.usrCtrl.getIPAddress().subscribe(
 
    (Response: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة أكوادالأقسام الرئيسية',Action:'open window',Order:'',Order_Type:'',
  
  
        Ip_Address: Response.ip
      };
     
      // console.log(ctrl.Order);
      this.usrCtrl.addCtrl(ctrl).subscribe(
        next => {},
        error=>{}
        
  
      );
      
      console.log(Response);
    });


    //============================================

    this.deptService.getAllDepts().subscribe(
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
      error=>{}
    );
 
    

}
get Id() {
  return this.deptsForms.get('Id');
}

//=========================================================
get Name() { return this.deptsForms.get('Name'); }
/////////////////////////////======================================


getDeptById(){

  this.deptService.GetDeptById(this.Id?.value).subscribe(

    (Response: any) => {
      //this.iap=Response;
      console.log(Response);
      this.deptsForms.get('Name')?.setValue(Response.name);
      this.toastr.warning("الكود مستخدم", " رسالة من قاعدة البيانات", { progressBar: true });
    },
    error => {
      console.log(error); // Print the error object to the console
      //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    });
}
///////////////////////////////////////////
ClearForm(){
  this.deptsForms.reset()
}

////////////////////////////////////////////
addDept(){


  if (this.deptsForms.valid) {

    console.log(this.deptsForms.value);
    this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
    this.deptService.addDept(this.deptsForms.value).subscribe(
      next => {
        this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
      },
      error => {
        this.toastr.error("خطأ", "خطأ");
        console.log(error);
      } );  }
     else this.toastr.warning("من فضلك استكمل البيانات", "تنبيه");  }

     //////////////////////////////////////////////
updDept(){

if (this.deptsForms.valid) {
  console.log(this.deptsForms.value);
  this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
  this.deptService.updDept(this.deptsForms.value).subscribe(
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
delDept(){

if (this.Id?.value) {

  this.deptService.delDept(this.Id?.value).subscribe(
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
