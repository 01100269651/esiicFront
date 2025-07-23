
import { DatePipe, formatDate } from '@angular/common';
import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog,  MatDialogRef, } from '@angular/material/dialog';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { DiagComponent } from '../diag/diag.component';
import { OrderComponent } from '../order/order.component';



import { BaseCompComponent } from 'src/app/Components/base-comp/base-comp.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';

import { DeptService } from 'src/it-sector/Services/dept.service';
import { OrdTypesService } from 'src/it-sector/Services/ord-types.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { OrderBuyComponent } from 'src/shared/Components/order-buy/order-buy.component';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { MatSelect, MatSelectChange } from '@angular/material/select';



@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
  // standalone: true,
  // imports: [
  //   MatFormFieldModule,
  //   MatInputModule,
  //   FormsModule,
  //   MatButtonModule,
  //   NgIf,NgFor ,
  //   MatDialogModule,FormsModule,ReactiveFormsModule,MatBadgeModule, MatButtonModule, MatIconModule,MatOptionModule,MatInputModule,MatFormFieldModule
  // ],
   providers: [DatePipe]
  
  
})


export class CreateOrderComponent extends BaseCompComponent implements AfterViewInit {


  @ViewChild('matSelect') child!: MatSelect; 

  @ViewChild('Ses') Ses!: ElementRef;

  facts: any[] = [];
  ordTypes: any[] = [];
  cause:string='سبب الاستعمال';
  name:string='';
  animal:string='';
  Orderform!:FormGroup;
  factName:string="";
  DeptName:string="";
  TypeName:string="";
  OrdItems:any[]=[];
  depts:any[]=[];
isLoading: boolean =false;

 
  constructor(public dialog: MatDialog ,private rou:Router ,private fb:FormBuilder 
            ,private toastr: ToastrService ,private OrdService:OrdMstrService  , 
            private factSer:SCMFactService,private deptSer:DeptService,
            private usrCtrl:UserContrlService, private ordTypeSer:OrdTypesService ,
            private ENTER:EnterToTabService ,
            private datePipe: DatePipe) {   

           
    super(rou);
    ENTER.handleEnterKey();
    ///============================

    //this.focusableFact.nativeElement.focus();

    //getAllDepts
    this.deptSer.getAllDepts().subscribe(
      (Res:any)=>{
        this.depts=Res;

      },
      error=>{

      }
      
    );

    //==============================================
    this.ordTypeSer.getAllTypes().subscribe(
      (Response: any) => {
    
        //this.iap=Response;
        
        this.ordTypes=Response;
        setTimeout(() => {
          // if (this.focusableFact && this.focusableFact.nativeElement) {
          //   this.focusableFact.nativeElement.focus();
          // }
        }, 0);
      },
        
      error => {
  
 
      }

  
    );
    
//===========================

this.factSer.getAllFact().subscribe(

  (Response: any) => {

    this.facts=Response;
    setTimeout(() => {
      // if (this.focusableFact && this.focusableFact.nativeElement) {
      //   this.focusableFact.nativeElement.focus();
   
      // }
    }, 0);
    
    console.log(this.facts);
  },
          error => {

  }


);

    //==========================================
    this.Orderform = this.fb.group({
      Fact_Id: [Number(sessionStorage.getItem('fact'))],
      Season: [Number(sessionStorage.getItem('FinYear')), Validators.required],
      Type: ['', Validators.required],
      Ord_Id: ['', Validators.required],
      Main_Dept: ['', Validators.required],
      // Ord_Date :[this.datePipe.transform(new Date().toISOString().substring(0,10))],

      Ord_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US')],

      Cause: ['', Validators.required],

      Fnl_Date: [],
      Fnl_Id: [],
      // State:[''],
      // CreateDate:[] ,
      // CreatedBy:[] ,
      // UpdateDate:[],
      // UpdatedBy:[],
      // SomId:[],
      // Som_Date:[],
      // Som_Type:[]

    });
    ///////////////////////////////////////
    this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')?.toString()),
    
        Dept_Id:Number(sessionStorage.getItem('appId')?.toString()),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشةتكويد طلب جديد ',Action:'open windows ',Order:'',Order_Type:'',
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
        console.log(Response);
      });
   
///=========================================================

  }
  get Fact_Id(){return this.Orderform.get('Fact_Id');}
  get Season(){return this.Orderform.get('Season');}
  get Type(){return this.Orderform.get('Type');}
  get Ord_Id(){return this.Orderform.get('Ord_Id');}
  get Main_Dept(){return this.Orderform.get('Main_Dept');}
  get Ord_Date(){return this.Orderform.get('Ord_Date');}
  get Cause(){return this.Orderform.get('Cause');}
  get Fnl_Date(){return this.Orderform.get('Fnl_Date');}
  get Fnl_Id(){return this.Orderform.get('Fnl_Id');}
  get State(){return this.Orderform.get('State');}
  get SomId(){return this.Orderform.get('SomId');}
  get Som_Date(){return this.Orderform.get('Som_Date');}
  get Som_Type(){return this.Orderform.get('Som_Type');}
  
  ngAfterViewInit(): void {
  
    
    setTimeout(() => {

      if (this.child ) {

        //this.focusableFact.nativeElement.focus();
        this.child.focus();
        
      }
    }, 0);
  
  }

  openDialog(): void {
    if(this.Orderform.valid){
    const dialogRef = this.dialog.open(DiagComponent, {
      
      data: {Fact: this.Fact_Id?.value, Seson: this.Season?.value,

        Type:this.Type?.value,Id:this.Ord_Id?.value},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

   this.OrdService.getOrdAllItms(this.Fact_Id?.value,this.Season?.value,this.Type?.value,this.Ord_Id?.value).subscribe(
    (Response: any) => {

      //this.iap=Response;
      
      this.OrdItems =Response;
      

    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }



    );
  }
  else

  this.toastr.warning("برجاء استكمال البيانات")


  }

  openDialog2(): void{

  


    const dialogRef = this.dialog.open(OrderBuyComponent, {

      data: {Fact: this.Fact_Id?.value, Seson: this.Season?.value,

        Type:this.Type?.value,Id:this.Ord_Id?.value},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });



  }

  /////////////////////////////////////

  repairOrOrd(){
    if(this.Type?.value==1) this.cause="سبب الاستعمال"
    else if(this.Type?.value==3) this.cause="الغرض من الاصلاح"
  }
//====================================================================
onKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    // Prevent the mat-select from opening the dropdown
    event.preventDefault();
    event.stopPropagation();
    this.Ses.nativeElement.focus();
   
    
  }


}

///////////////////////===================================


onSelectionChange(event: any) {
  if (event.key === 'Enter') {
    // Prevent the mat-select from opening the dropdown
    event.preventDefault();
    event.stopPropagation();

    // Move the focus to the next input field
    this.Ses.nativeElement.focus();
  }
}
newForm(){
this.Orderform.reset();

}



///////////////////=============================================================//////////////////


getOrdById(){
  this.isLoading=true;

  this.OrdService.GetOrdById(this.Fact_Id?.value,this.Season?.value,this.Type?.value,this.Ord_Id?.value).subscribe(
 
    async (x: any) => {

     
this.isLoading=false;
      console.log(x);


      console.log(x.main_Dept);


      this.Orderform.get('Main_Dept')?.setValue(x.main_Dept);



    //   const dateWithTime = Response.ord_Date; // Replace this with your actual Date object

    //   const dateOnly = new date(Response.ord_Date).toISOString().split('T')[0];

    //  console.log(dateOnly); 


const ordDate = x.ord_Date; // Assuming you have parsed the JSON and obtained the value

const dateTime = new Date(ordDate);

const year = dateTime.getFullYear();

const month = String(dateTime.getMonth() + 1).padStart(2, '0');

const day = String(dateTime.getDate()).padStart(2, '0');

const dateOnly = `${year}-${month}-${day}`;

console.log(dateOnly); // Output: 2024-01-14



if (x.ord_Date != null) {

  const ord_Date = new Date(x.ord_Date);

  const formattedDateO = ord_Date.toISOString().substring(0, 10);


console.log(formattedDateO);
  this.Orderform.get('Ord_Date')?.setValue(formattedDateO);

} else {

  this.Orderform.get('Ord_Date')?.setValue(null);
  
}


//        const dateMatch = new Date(Response.ord_Date).toISOString().match(/\d{4}-\d{2}-\d{2}/);

// const dateOnly = dateMatch ? dateMatch[0] : null;



     // dateWithTime.setHours(0, 0, 0, 0); // Trim the time portion
      
    //  console.log(dateWithTime); 
      //
     // console.log(dateOnly);
     // const Ord_Date = new Date(Response.ord_Date);
     

//const formattedDate1 = Ord_Date.toISOString().substring(0, 10);
//this.Orderform.get('Ord_Date')?.setValue(formattedDate1);

    //  this.Orderform.get('Ord_Date')?.setValue(Response.ord_Date);

      //eng_No

      this.Orderform.get('Cause')?.setValue(x.cause);

      this.Orderform.get('Fnl_Id')?.setValue(x.fnl_Id);

   
     
      // this.Orderform.get('Fnl_Date')?.setValue(formatDate(Response.fnl_Date,("yyyy/mm/dd"), 'ar-EG'));

//      this.Orderform.get('Fnl_Date')?.setValue(formatDate((Response.fnl_Date).toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'));
if (x.Date != null) {
  const fnlDate = new Date(x.fnl_Date);
  const formattedDate = fnlDate.toISOString().substring(0, 10);
  this.Orderform.get('Fnl_Date')?.setValue(formattedDate);
} else {
  this.Orderform.get('Fnl_Date')?.setValue(null);
}

    },
    
    error => {

      //console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
   this.isLoading=false;
  
    }


  );

  //
 
}
 
/////////////////////////////////////////////////====================================////////////////////////////
addorder(){
  if(this.Orderform.valid)
  {
 
   console.log(this.Orderform.value);

   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.OrdService.addOrder(this.Orderform.value).subscribe(
     next => {
 
       // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
       // var appName=sessionStorage.getItem('grName');
       // this.rout.navigate(['userLogin',appName]);
       this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
     ///////////////////////////////////////
     this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')?.toString()),
    
        Dept_Id:Number(sessionStorage.getItem('appId')?.toString()),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة تكويد طلب جديد ',Action:'اضافة طلب جديد ',Order:this.Ord_Id?.value,Order_Type:this.Type?.value,
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
        console.log(Response);
      });
   
///=========================================================

 
 
     },
     
     error => {
 
      this.toastr.error("خطأ","خطأ");
     
     
     
     }
 
 
   );
 
 
 
  }
  
  }   
  /////////////////////////////////////////////============================////////////////////////////////
updorder(){
  if(this.Orderform.valid)
  {
 
   console.log(this.Orderform.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.OrdService.updOrd(this.Orderform.value).subscribe(
     next => {
 
       // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
       // var appName=sessionStorage.getItem('grName');
       // this.rout.navigate(['userLogin',appName]);
       this.toastr.success("تم التعديل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
 
      ///////////////////////////////////////
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة تكويد طلب جديد ',Action:' طلب تعديل ',Order:this.Ord_Id?.value,Order_Type:this.Type?.value,
      
      
            Ip_Address: x.ip
          };
         
          // console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
          console.log(Response);
        });
     
  ///=========================================================
  
 
     },
     
     error => {
 
      this.toastr.error("خطأ","خطأ");
     
     
     
     }
 
 
   );
 
 
 
  }
  
  }
    ////////////////////////////////////////////////=======================/////////////////////////////
  delorderForm(){
 

console.log(this.Fact_Id?.value)
    this.OrdService.delOrd(this.Fact_Id?.value,this.Season?.value,
                         this.Type?.value,this.Ord_Id?.value).subscribe(
      next => {
  
        // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
        // var appName=sessionStorage.getItem('grName');
        // this.rout.navigate(['userLogin',appName]);
        this.toastr.info("تم الحذف بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});

             ///////////////////////////////////////
     this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة تكويد طلب جديد ',Action:'حذف طلب  ',Order:this.Ord_Id?.value,Order_Type:this.Type?.value,
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
        console.log(Response);
      });
   
///=========================================================

  
  
  
      },
      
      error => {
  
       this.toastr.error("خطأ","خطأ");
      
      
      
      }
  
  
    );
  
  
    }

    ////////////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++////////////
    getFactName(){
      this.factSer.GetFactById(this.Fact_Id?.value).subscribe(
 
        (Response: any) => {
    
          //this.iap=Response;
          
          console.log(Response);
          
  
         // document.getElementById('factLbl')?.innerText=Response.name;
          //this.Orderform.get('Name')?.setValue(Response.name);
          this.factName= Response.name;
          
          
        //  this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});
    
        },
        
        error => {
    
      //    console.log(error); // Print the error object to the console
  
       //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
      
        }
  
    
      );
    


    }
////////////////////////////////////////////////////////+++++++++++++++++++++++++++++++++++++++++///////////

getDeptName(){
  this.deptSer.GetDeptById(this.Main_Dept?.value).subscribe(

    (Response: any) => {
      //this.iap=Response;
      console.log(Response);
      this.DeptName=Response.name;
     
     // this.toastr.warning("الكود مستخدم", " رسالة من قاعدة البيانات", { progressBar: true });
    },
    error => {
      console.log(error); // Print the error object to the console
      //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    });
  
//  this.DeptName

}
  

//============================================================+++++++++++++==================================
getTypeName(){

  this.ordTypeSer.GetOrdById(this.Type?.value).subscribe(

    (Response: any) => {
      //this.iap=Response;
      console.log(Response);
      this.TypeName=Response.name;

     
     // this.toastr.warning("الكود مستخدم", " رسالة من قاعدة البيانات", { progressBar: true });
    },
    error => {
      console.log(error); // Print the error object to the console
      //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    });
  }

////=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

getOrdId(){

}



  }
  

  





