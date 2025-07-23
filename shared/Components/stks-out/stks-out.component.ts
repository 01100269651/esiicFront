import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { CostService } from 'src/it-sector/Services/cost.service';
import { FAccountMService } from 'src/it-sector/Services/f-account-m.service';
import { ItemService } from 'src/it-sector/Services/item.service';
import { OrdTypesService } from 'src/it-sector/Services/ord-types.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { StoresService } from 'src/it-sector/Services/stores.service';
import { SupplierService } from 'src/it-sector/Services/supplier.service';
import { SupplyOrdService } from 'src/it-sector/Services/supply-ord.service';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';

@Component({
  selector: 'app-stks-out',
  templateUrl: './stks-out.component.html',
  styleUrls: ['./stks-out.component.css']
})
export class StksOutComponent {

  Fact: string = '';

  Type: string = '';

  OrdId: string = '';

  facts: any[] = [];
  
  supTypes: any[] = [];
  
  ordTypes: any[] = [];
  
  tranOutForm!: FormGroup;
  
  storeName: string = "";
  
  itemName :string="";

  itemUnitName:string="";
  
  supName :string="";

  accountName :string ="";

  costName :string="";

  itemBalance:any;




 
  constructor(public dialog: MatDialog ,private scmFactSer:SCMFactService ,
    private fb:FormBuilder ,private storSer:StoresService  , private supTypesSer:SupplyOrdService,
    private ordTypesServ:OrdTypesService ,private ItemSer:ItemService ,private toastr: ToastrService ,
    private supServ:SupplierService,private costServ:CostService ,private _snackBar: MatSnackBar,
    private  accServ:FAccountMService ,private inServ:InSTOKService ,   private entertotab:EnterToTabService
    ) {

      
///////////////////////////////////////////////////========================      
entertotab.handleEnterKey();
///////////////////////////////////////////////////========================


    this.ordTypesServ.getAllTypes().subscribe(
      (Response: any) => {
    
        //this.iap=Response;
        
        this.ordTypes=Response;
      },
        
      error => {
  
 
      }

  
    );

    ///===========================================


      //=====================================
    this.scmFactSer.getAllFact().subscribe(
      (Response: any) => {
        this.facts=Response;
      },
              error => {
   
      }

  
    );
    ////////////////////////////////////////////////////////////
    this.supTypesSer.getAllSupOrder().subscribe(

      (Response: any) => {
    
        //this.iap=Response;

        
        this.supTypes=Response;
        console.log(this.supTypes);
      },
        
      error => {
  
 
      }

  
    
    );

    
    //////////////////////////////
    this.tranOutForm = this.fb.group({

      Fact_Id: [Number(sessionStorage.getItem('fact')),Validators.required],

      Tran_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

      Tran_Code: [ '3', Validators.required],

      Page: ['', Validators.required],

      Ser: ['', Validators.required],

      Cost_ID:['',Validators.maxLength(5)],

      Store_Id: ['', [Validators.maxLength(12),Validators.minLength(12), Validators.required]],
      
     

      Item_No:[,[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],

      Quantity:['', Validators.required],


      Exe_Rec_No :['', Validators.required],

      Exe_Rec_Date :[formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

      InvoiceOrSendNo : [],

      InvoiceOrSendDate :[null],

      Car_No :[],

      ACC_NO :['',[Validators.minLength(11),Validators.maxLength(11)]],

      Supplier:['',[Validators.minLength(9),Validators.maxLength(9)]],

      Send_Fact :[]

    });
        

    
  }




  ///==========================================================
  get Fact_Id(){return this.tranOutForm.get('Fact_Id');}
  
  get Tran_Date(){return this.tranOutForm.get('Tran_Date');}
 
  get Tran_Code(){return this.tranOutForm.get('Tran_Code');}
  
  get Page(){return this.tranOutForm.get('Page');}
 
  get Ser(){return this.tranOutForm.get('Ser');}

  //Cost_ID
  get Cost_ID(){return this.tranOutForm.get('Cost_ID');}
 
  
  get Store_Id(){return this.tranOutForm.get('Store_Id');}
 
  get Som_Type(){return this.tranOutForm.get('Som_Type');}
  
  get Ord_Type(){return this.tranOutForm.get('Ord_Type');}
 
  get Ord_Id(){return this.tranOutForm.get('Ord_Id');}
  
  get Item_No(){return this.tranOutForm.get('Item_No');}
 
  get Quantity(){return this.tranOutForm.get('Quantity');}
  
  get Value(){return this.tranOutForm.get('Value');}
 
  get Exe_Rec_No(){return this.tranOutForm.get('Exe_Rec_No');}

  get Exe_Rec_Date(){return this.tranOutForm.get('Exe_Rec_Date');}
 
  get InvoiceOrSendNo(){return this.tranOutForm.get('InvoiceOrSendNo');}
  
  get InvoiceOrSendDate(){return this.tranOutForm.get('InvoiceOrSendDate');}
 
  get Car_No(){return this.tranOutForm.get('Car_No');}

  get ACC_NO(){return this.tranOutForm.get('ACC_NO');}

  get Supplier(){return this.tranOutForm.get('Supplier');}

  get Som_Id(){return this.tranOutForm.get('Som_Id');}

  get Send_Fact(){return this.tranOutForm.get('Send_Fact');}
 

//////////////////////=======================================
getItemName(){
  this.ItemSer.GetItem(this.Item_No?.value).subscribe(
    (Response: any) => {
      console.log(Response);
      this.itemName = Response.name;
      this.itemUnitName = Response.scM_Unit.name;

       
    },
      error => {
        this.toastr.warning("اسم الصنف غير مسجل")
      }


);

this.ItemSer.getItemBalance(sessionStorage.getItem('fact'),this.Item_No?.value).subscribe(
  (x:any)=>{
    this.itemBalance=x;
  },
  error =>{}

);
}
  //===========================================================
/////////////////////////////////////////

getAccName(){
  this.accServ.GetAccountById(this.ACC_NO?.value).subscribe(
    (Response: any) => {
  
      console.log(Response);
        
        this.accountName=Response.acc_Name;
      },
        
      error => {
  
        this.toastr.warning("رقم الحساب غير صحيح");
    
    
      }
    
  
  );
  
  }

  ///============================================================

  getCostName(){

    //GetCostById

    this.costServ.GetCostById(this.Cost_ID?.value).subscribe(
      (Response: any) => {
    
        console.log(Response);
          
          this.costName=Response.name;
        },
          
        error => {
    
          this.toastr.warning("رقم الحساب غير صحيح");
      
      
        }
      
    
    );


  }
  

//////////////////////////////////////////======================/////

getTranById(){

  this.inServ.GetTranById(this.Fact_Id?.value,this.Tran_Date?.value,this.Tran_Code?.value,this.Page?.value,this.Ser?.value).subscribe(
 
    (Response: any) => {

      //this.iap=Response;
      
      console.log(Response);
      

      
      this.tranOutForm.get('Store_Id')?.setValue(Response.store_Id);
     this.getStoreName();
      this.tranOutForm.get('Som_Type')?.setValue(Response.som_Type);
  
   
      this.tranOutForm.get('Cost_ID')?.setValue(Response.cost_ID);
      this.getCostName();

      this.tranOutForm.get('Item_No')?.setValue(Response.item_No);
      this.getItemName()
      this.tranOutForm.get('Quantity')?.setValue(Response.quantity);
      this.tranOutForm.get('Value')?.setValue(Response.value);
      this.tranOutForm.get('Exe_Rec_No')?.setValue(Response.exe_Rec_No);

      const Exe_Rec_Date = new Date(Response.exe_Rec_Date);

      const formattedDate1 = Exe_Rec_Date.toISOString().substring(0, 10);
      
      this.tranOutForm.get('InvoiceOrSendDate')?.setValue(formattedDate1);
      
      

      this.tranOutForm.get('InvoiceOrSendNo')?.setValue(Response.invoiceOrSendNo);

      const InvoiceOrSendDate = new Date(Response.invoiceOrSendDate);
      
      const formattedDate2 = InvoiceOrSendDate.toISOString().substring(0, 10);
           
      
      
      
      this.tranOutForm.get('InvoiceOrSendDate')?.setValue(formattedDate2);

      this.tranOutForm.get('Car_No')?.setValue(Response.car_No);

      this.tranOutForm.get('ACC_NO')?.setValue(Response.acC_NO);
      
      this.getAccName();

      // this.tranIncomeForm.get('Supplier')?.setValue(Response.supplier);

      // this.getSupName();











      //


    //  this.Orderform.get('Ord_Date')?.setValue(Response.ord_Date);

      //eng_No

      this.tranOutForm.get('Cause')?.setValue(Response.cause);

      this.tranOutForm.get('Fnl_Id')?.setValue(Response.fnl_Id);
     
      // this.Orderform.get('Fnl_Date')?.setValue(formatDate(Response.fnl_Date,("yyyy/mm/dd"), 'ar-EG'));

//      this.Orderform.get('Fnl_Date')?.setValue(formatDate((Response.fnl_Date).toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'));
const fnlDate = new Date(Response.fnl_Date);
const formattedDate = fnlDate.toISOString().substring(0, 10);
this.tranOutForm.get('Fnl_Date')?.setValue(formattedDate);

    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }


  );





}


//============================================
getStoreName(){
  this.storSer.GetSoreByFactId(this.Fact_Id?.value,this.Store_Id?.value).subscribe(
    (Response: any) => {
  
    console.log(Response);
      
      this.storeName=Response.name;
    },
      
    error => {
      this.toastr.error("مخزن غير موجود");
      this.storeName="مخزن غير موجود";
  
  
    }
  
  
  );
  
  }

  ///===========================================================================
  newForm(){
    this.tranOutForm.reset();
  }

  //=================================================================================================
  addOutTran(){
    if(this.InvoiceOrSendDate?.value=='')  this.tranOutForm.get('InvoiceOrSendDate')?.setValue(null);
    if(this.Exe_Rec_Date?.value=='')  this.tranOutForm.get('Exe_Rec_Date')?.setValue(null);
    
    console.log(this.tranOutForm.value);
    if(this.tranOutForm.valid)
    {
   
     console.log(this.tranOutForm.value);
     this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
   
     this.inServ.AddNewTran(this.tranOutForm.value).subscribe(
       next => {
           this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});   
       },
       
       error => {
           this.toastr.error("خطأ","خطأ");
        console.log(error);       }
   
   
     );
   
   
   
    }
  
    else this.toastr.warning("من فضلك استكمل البيانات","تنبيه")
  
  



  }

  ////=================================================

  updOutTran(){
    if(this.InvoiceOrSendDate?.value=='')  this.tranOutForm.get('InvoiceOrSendDate')?.setValue(null);
    if(this.Exe_Rec_Date?.value=='')  this.tranOutForm.get('Exe_Rec_Date')?.setValue(null);
    


  if(this.tranOutForm.valid)
  {
 
   console.log(this.tranOutForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.inServ.UpdTran(this.tranOutForm.value).subscribe(
     
    
     next => {
       this.toastr.success("تم التعديل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
     }
     , error => { this.toastr.error("خطأ", "خطأ"); });

  }
  
  }





  
  ////////////////////////////
  deleteOutTran(){


  let asd =  this._snackBar.open("هل تريد الحذف", "موافق",{
      horizontalPosition: 'center',
      verticalPosition: 'top',duration:3000
    })   .onAction().subscribe(() =>  {
      
      
      
     this.inServ.DelTran(this.Fact_Id?.value,this.Tran_Date?.value,this.Tran_Code?.value,this.Page?.value,this.Ser?.value).subscribe(
         next => {
    
  
           this.toastr.success("تم الحذف بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
    
    
    
         },
        
         error => {  
          this.toastr.error("خطأ","خطأ");     }
     
       );
    
  
  
  
  
  }
    );

    

    
    

   
  




  }
  





}
