import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { OrdTypesService } from 'src/it-sector/Services/ord-types.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-order-types',
  templateUrl: './order-types.component.html',
  styleUrls: ['./order-types.component.css']
})
export class OrderTypesComponent {
  displayedColumns: string[] =['position','code','name'
  
  
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
 
  OrdTypeForm!:FormGroup;
  constructor(private fb: FormBuilder, 
    private entertotab:EnterToTabService,
    private toastr: ToastrService, private OrdTypSer: OrdTypesService,private usrCtrl:UserContrlService) {


      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

      
    this.OrdTypeForm = this.fb.group({

      Code: ['', [Validators.required, Validators.maxLength(4)]],


      Name: ['', Validators.required],



    });
    //==============================
    /////////////////////////////////////
   

    this.OrdTypSer.getAllTypes().subscribe(
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
     /////////////////////////////////////
     this.usrCtrl.getIPAddress().subscribe(
 
      (Response: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة أكواد أنواع الطلبات',Action:'open window',Order:'',Order_Type:'',
    
    
          Ip_Address: Response.ip
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
    return this.OrdTypeForm.get('Code');
  }

  //=========================================================
  get Name() { return this.OrdTypeForm.get('Name'); }
  /////////////////////////////======================================

  ///////////////////////////////////
  getOrdById(){

    this.OrdTypSer.GetOrdById(this.Code?.value).subscribe(

      (Response: any) => {
        //this.iap=Response;
        console.log(Response);
        this.OrdTypeForm.get('Name')?.setValue(Response.name);
        this.toastr.warning("الكود مستخدم", " رسالة من قاعدة البيانات", { progressBar: true });
      },
      error => {
        console.log(error); // Print the error object to the console
        //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
      });
}
  ///////////////////////////////////////////
  ClearForm(){
    this.OrdTypeForm.reset()
  }

  ////////////////////////////////////////////
  addType(){


    if (this.OrdTypeForm.valid) {

      console.log(this.OrdTypeForm.value);
      this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
      this.OrdTypSer.addTyp(this.OrdTypeForm.value).subscribe(
        next => {
          this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
        },
        error => {
          this.toastr.error("خطأ", "خطأ");
          console.log(error);
        } );  }
       else this.toastr.warning("من فضلك استكمل البيانات", "تنبيه");  }

       //////////////////////////////////////////////
updType(){

  if (this.OrdTypeForm.valid) {
    console.log(this.OrdTypeForm.value);
    this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });
    this.OrdTypSer.updType(this.OrdTypeForm.value).subscribe(
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
delType(){

  if (this.Code?.value) {

    this.OrdTypSer.delType(this.Code?.value).subscribe(
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



