
import {Component, Inject, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { OrdItmService } from 'src/demands/Services/ord-itm.service';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from 'src/it-sector/Services/item.service';
import { MasterFactService } from 'src/it-sector/Services/master-fact.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';


export interface DialogData {
  Fact: string ;
  Seson: string;
  Type: string;
  Id: string;
}
@Component({
  selector: 'app-diag',
  templateUrl: './diag.component.html',
  styleUrls: ['./diag.component.css']

})


export class DiagComponent implements OnChanges {

  itemform!:FormGroup;
  itemName:string='';

  itms:any[]=[];

  itemUnitName:string='';
  @ViewChild (MatPaginator) paginator!: MatPaginator;

  itemBalance:any=0;

  displayedColumns: string[] = ['fact_Name' ,'item_Name','quantity_Master','quantity_Trans'];
  
dataSource!: any;
isLoading:boolean= false;

  constructor(   private transSer:InSTOKService ,
    
    public dialogRef: MatDialogRef<DiagComponent>,    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  private fb:FormBuilder ,private ordItemSer:OrdItmService  ,private toastr: ToastrService , private itmService:ItemService,

  private mastFactService:MasterFactService ,private usrCtrl:UserContrlService ,private  entertotab :EnterToTabService

  ) {

   //alert(data.Fact);
    //alert(data.name)



      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    // تسجيل الأصناف

    this.itemform = this.fb.group({
      Fact_Id: [this.data.Fact, [Validators.required]],
      Season: [this.data.Seson, Validators.required],
      Type: [this.data.Type, Validators.required],
      Ord_Id: [this.data.Id, Validators.required],
      Item_No :['',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
      Ser_No :[0],
      Balance :[0],
      Quantity:['',Validators.required],
      Part_No :[],
      Working_No :[],
      Tech_Descr :[,Validators.maxLength(400)]
          });

                      ///////////////////////////////////////
     this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')?.toString()),
    
        Dept_Id:Number(sessionStorage.getItem('appId')?.toString()),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة تسجيل الأصناف ',Action:' open window  ',Order:this.Ord_Id?.value,Order_Type:this.Type?.value,
    
    
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

  //=============================================================================
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //=========================
ngOnChanges(changes: SimpleChanges): void {

}




  //==============================================
  onNoClick(): void {
  

    this.dialogRef.close();
  }

  

  ////==========================================
  get Fact_Id(){return this.itemform.get('Fact_Id');}
  //===============================================================
  get Season() { return this.itemform.get('Season'); }
  //====================================================================
  get Type() { return this.itemform.get('Type'); }
  //===============================================================
  get Ord_Id() { return this.itemform.get('Ord_Id'); }
  //====================================================================
  get Item_No() { return this.itemform.get('Item_No'); }
  //===============================================================
  get Ser_No() { return this.itemform.get('Ser_No'); }
  //====================================================================
  get Balance() { return this.itemform.get('Balance'); }
  //===============================================================
  get Quantity() { return this.itemform.get('Quantity'); }
  //====================================================================
  get Part_No() { return this.itemform.get('Part_No'); }
  //====================================================================
  get Working_No() { return this.itemform.get('Working_No'); }
  //===============================================================
  get Tech_Descr() { return this.itemform.get('Tech_Descr'); }
  //====================================================================



//================================================================================

getMasterFacts()
{
  
  // this.mastFactService.getItemsAllFacts(this.Item_No?.value).subscribe(
  //   (Response:any)=>{

  //     this.itms=Response;

  //     console.log(this.itms);
  //   },
  //   error=>{


  //   }



  // );


}




  //////////////////////////////////////
  clearForm(){

    var oldFact=this.Fact_Id?.value;
    var oldSes=this.Season?.value;
    var oldType= this.Type?.value;
    var oldId =this.Ord_Id?.value;
    this.itemform.reset();
    this.itemform.get('Fact_Id')?.setValue(oldFact);
    this.itemform.get('Season')?.setValue(oldSes);
    this.itemform.get('Type')?.setValue(oldType);
    this.itemform.get('Ord_Id')?.setValue(oldId);
  }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

getOrdItmBy(){

  this.ordItemSer.GetOrdItmById(this.Fact_Id?.value,this.Season?.value,this.Type?.value,this.Ord_Id?.value,this.Item_No?.value).subscribe(
 
    (Response: any) => {

      //this.iap=Response;
      
      console.log(Response);
      

      
      this.itemform.get('Balance')?.setValue(Response.balance);

      this.itemform.get('Quantity')?.setValue(Response.quantity);

      this.itemform.get('Tech_Descr')?.setValue(Response.tech_Descr);

      this.itemform.get('Working_No')?.setValue(Response.working_No);
      
      this.itemform.get('Part_No')?.setValue(Response.part_No);





      //
      const Ord_Date = new Date(Response.ord_Date);
      
      const formattedDate1 = Ord_Date.toISOString().substring(0, 10);





      

      // this.Orderform.get('Ord_Date')?.setValue(formattedDate1);

    //  this.Orderform.get('Ord_Date')?.setValue(Response.ord_Date);

      //eng_No

      // this.Orderform.get('Cause')?.setValue(Response.cause);

      // this.Orderform.get('Fnl_Id')?.setValue(Response.fnl_Id);
     
      // this.Orderform.get('Fnl_Date')?.setValue(formatDate(Response.fnl_Date,("yyyy/mm/dd"), 'ar-EG'));

//      this.Orderform.get('Fnl_Date')?.setValue(formatDate((Response.fnl_Date).toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'));
// const fnlDate = new Date(Response.fnl_Date);
// const formattedDate = fnlDate.toISOString().substring(0, 10);
// this.Orderform.get('Fnl_Date')?.setValue(formattedDate);

    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }


  );

}
/////////////////////////////////////
getItemName(){
  this.itmService.GetItem(this.Item_No?.value).subscribe(
 
    (Response: any) => {

      //this.iap=Response;
      
      console.log(Response);
      

      
      this.itemName=Response.name;
      this.itemUnitName =Response.scM_Unit.name;
   

    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }


  );
//   this.itmService.getItemBalance(sessionStorage.getItem('fact'),this.Item_No?.value)
//   .subscribe(
//     (x:any)=>{
//       this.itemform.get('Balance')?.setValue(0);
      
//       this.itemBalance=0;
// this.itemBalance=x;



//     },

//     error=>{
//       this.itemBalance=0;

//     }

//   );.
 this.isLoading=true;
this.transSer.getItmBal(this.Item_No?.value).subscribe(
  (response:any)=>{

    this.dataSource = new MatTableDataSource(response);
    this.dataSource.data = response;
    this.dataSource.length = response.length;
    this.dataSource.paginator = this.paginator; // Connect the paginator here
    const dataSource = new MatTableDataSource(response);
    dataSource.paginator = this.paginator;
    console.log(dataSource);
    this.isLoading=false;
    dataSource.data=response;

  },
  error=>{
    this.isLoading = false;
  }
);

}



  //////////////////////////////////////
  addItem(){
   

    if(this.itemform.valid)
    {
      this.itemform.get('Balance')?.setValue(this.itemBalance);
     console.log(this.itemform.value);

     this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
   
     this.ordItemSer.addItem(this.itemform.value).subscribe(
       next => {
   
         // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
         // var appName=sessionStorage.getItem('grName');
         // this.rout.navigate(['userLogin',appName]);
         this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});


                               ///////////////////////////////////////
     this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة تسجيل الأصناف ',Action:'اضافة صنف',Order:this.Item_No?.value,Order_Type:this.Type?.value,
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
       // console.log(Response);
      });
   
///=========================================================

  
   
   
   
       },
       
       error => {
   
        this.toastr.error("خطأ","خطأ");
       
       
       
       }
   
   
     );
   
   
   
    }
    else {
      this.toastr.error("النموذج غير صالح","");
      console.log(this.itemform.value)
    }
    
  }
  //////////////////////////////////////////////////
  updItem(){
    if(this.itemform.valid)
    {
   
     console.log(this.itemform.value);
     this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
   
     this.ordItemSer.updItm(this.itemform.value).subscribe(
       next => {
   
         // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
         // var appName=sessionStorage.getItem('grName');
         // this.rout.navigate(['userLogin',appName]);
         this.toastr.success("تم التعديل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
         this.usrCtrl.getIPAddress().subscribe(
 
          (x: any) => {
        
            //this.iap=Response;
            let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')?.toString()),
        
            Dept_Id:Number(sessionStorage.getItem('appId')?.toString()),Tran_Date:new Date(), Tran_Time:new Date(),
        
            Win_Name:'شاشة تسجيل الأصناف ',Action:'تعديل صنف',Order:this.Item_No?.value,Order_Type:this.Type?.value,
        
        
              Ip_Address: x.ip
            };
           
            // console.log(ctrl.Order);
            this.usrCtrl.addCtrl(ctrl).subscribe(
              next => {},
              error=>{}
              
        
            );
            
           // console.log(Response);
          });
       
    ///=========================================================
    
      
   
   
   
       },
       
       error => {
   
        this.toastr.error("خطأ","خطأ");
       
       
       
       }
   
   
     );
   
   
   
    }
    
    }
    
  ///////////////
  delItem(){

    
    this.ordItemSer.delItm(this.Fact_Id?.value,this.Season?.value,
      this.Type?.value,this.Ord_Id?.value,this.Item_No?.value).subscribe(
next => {

// this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
// var appName=sessionStorage.getItem('grName');
// this.rout.navigate(['userLogin',appName]);
this.toastr.success("تم الحذف بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});


//////

this.usrCtrl.getIPAddress().subscribe(
 
  (x: any) => {

    //this.iap=Response;
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة تسجيل الأصناف ',Action:'حذف صنف',Order:this.Item_No?.value,Order_Type:this.Type?.value,


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
    
   // console.log(Response);
  });


///////////////////



},

error => {

this.toastr.error("خطأ","خطأ");



}


);
  }


  

}
