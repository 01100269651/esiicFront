import { formatDate } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { FAccountMService } from 'src/it-sector/Services/f-account-m.service';
import { ItemService } from 'src/it-sector/Services/item.service';
import { OrdTypesService } from 'src/it-sector/Services/ord-types.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { StoresService } from 'src/it-sector/Services/stores.service';
import { SupplierService } from 'src/it-sector/Services/supplier.service';
import { SupplyOrdService } from 'src/it-sector/Services/supply-ord.service';
import { OrdDetailsComponent } from 'src/stocks/Components/ord-details/ord-details.component';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';

@Component({
  selector: 'app-stks-in',
  templateUrl: './stks-in.component.html',
  styleUrls: ['./stks-in.component.css']
})
export class StksInComponent {

  @ViewChild('Ser1')Ser1!: ElementRef;

  @ViewChild('Page1') Page1!: ElementRef;
  

  Fact: any=sessionStorage.getItem('fact');

  Type: string = '';

  OrdId: string = '';

  facts: any[] = [];

  supTypes: any[] = [];

  ordTypes: any[] = [];

  tranIncomeForm!: FormGroup;

  storeName: string = "";

  storeKind :any=1;

  itemName :string="";

  itemUnitName :string="";

  supName :string="";

  itemBalance:any;
  

  accountName :string ="";

   test!:Number;

 
  constructor(public dialog: MatDialog ,
    private scmFactSer:SCMFactService ,
    private fb:FormBuilder ,
    private storSer:StoresService  , 
    private supTypesSer:SupplyOrdService,
    private ordTypesServ:OrdTypesService ,
    private ItemSer:ItemService ,
    private toastr: ToastrService ,
    private supServ:SupplierService ,
    private  accServ:FAccountMService ,
    private inServ:InSTOKService ,
    private _snackBar: MatSnackBar,   private entertotab:EnterToTabService,
    ) {

///////////////////////////////////////////////////========================      
      entertotab.handleEnterKey();
///////////////////////////////////////////////////========================


     console.log(this.Fact);
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

    this.tranIncomeForm = this.fb.group({

      Fact_Id: [Number(sessionStorage.getItem('fact')),Validators.required],

      Tran_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

      Tran_Code: [ '1', Validators.required],

      Page: ['', Validators.required],

      Ser: ['', Validators.required],

      Store_Id: ['', [Validators.maxLength(12),Validators.minLength(12), Validators.required]],
      
      Som_Type: ['', Validators.required],

      Som_Id: [null],

      Ord_Type:['', Validators.required],

      Ord_Id:['', Validators.required],

      Item_No:[,[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],

      Quantity:['', Validators.required],

      Value :['', Validators.required],

      Exe_Rec_No :['', Validators.required],

      Exe_Rec_Date :[formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

      InvoiceOrSendNo : ['', Validators.required],

      InvoiceOrSendDate :[null],

      Car_No :[],

      ACC_NO :['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],

      Supplier:['',[Validators.minLength(9),Validators.maxLength(9)]]



      // State:[''],
      // CreateDate:[] ,
      // CreatedBy:[] ,
      // UpdateDate:[],
      // UpdatedBy:[],
      // SomId:[],
      // Som_Date:[],
      // Som_Type:[]

    });
        
   
    
  }

  
  get Fact_Id(){return this.tranIncomeForm.get('Fact_Id');}
  
  get Tran_Date(){return this.tranIncomeForm.get('Tran_Date');}
 
  get Tran_Code(){return this.tranIncomeForm.get('Tran_Code');}
  
  get Page(){return this.tranIncomeForm.get('Page');}
 
  get Ser(){return this.tranIncomeForm.get('Ser');}
  
  get Store_Id(){return this.tranIncomeForm.get('Store_Id');}
 
  get Som_Type(){return this.tranIncomeForm.get('Som_Type');}
  
  get Ord_Type(){return this.tranIncomeForm.get('Ord_Type');}
 
  get Ord_Id(){return this.tranIncomeForm.get('Ord_Id');}
  
  get Item_No(){return this.tranIncomeForm.get('Item_No');}
 
  get Quantity(){return this.tranIncomeForm.get('Quantity');}
  
  get Value(){return this.tranIncomeForm.get('Value');}
 
  get Exe_Rec_No(){return this.tranIncomeForm.get('Exe_Rec_No');}

  get Exe_Rec_Date(){return this.tranIncomeForm.get('Exe_Rec_Date');}
 
  get InvoiceOrSendNo(){return this.tranIncomeForm.get('InvoiceOrSendNo');}
  
  get InvoiceOrSendDate(){return this.tranIncomeForm.get('InvoiceOrSendDate');}
 
  get Car_No(){return this.tranIncomeForm.get('Car_No');}

  get ACC_NO(){return this.tranIncomeForm.get('ACC_NO');}

  get Supplier(){return this.tranIncomeForm.get('Supplier');}

  get Som_Id(){return this.tranIncomeForm.get('Som_Id');}
 


//============++++++++++++++++++++++++++++++++++++++
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
  

//=================
  openDialog2(): void{

    const dialogRef = this.dialog.open(OrdDetailsComponent, {

      data: {Fact: this.Fact_Id?.value, Seson:"2024",Type: this.Ord_Type?.value ,Id:this.Ord_Id?.value},
    });

      dialogRef.afterClosed().subscribe(result  => {
      
      console.log(result);

      this.tranIncomeForm.get('Item_No')?.setValue( result[0]);
      this.getItemName()
      this.tranIncomeForm.get('Quantity')?.setValue( result[1]);
    });
}
///================================================================================

getSoreName(){

this.storSer.GetSoreByFactId(this.Fact_Id?.value,this.Store_Id?.value).subscribe(

  (Response: any) => {
    let app=sessionStorage.getItem('appId');
   

  console.log(Response);
    
    this.storeName=Response.name;
    
    this.storeKind=Response.kind_Code;
    if(this.storeKind===1 && app === '4' )
      {
        this.storeKind=0;
      }
    if(this.storeKind!=1 && app === '3' )
      {
        this.tranIncomeForm.get('Store_Id')?.setValue(0);
        this.storeKind=0;
      }
    
   
    // this.toastr.show(this.storeKind);

  },
    
  error => {

    this.toastr.error("مخزن غير موجود");

    this.storeName="مخزن غير موجود";

  }


);

}
/////////////////////////////////////////

getSupName(){
this.supServ.GetSupById(this.Supplier?.value).subscribe(
  (Response: any) => {

    console.log(Response);
      
      this.supName=Response.name;
    },
      
    error => {

      this.toastr.warning("رقم المورد غير صحيح");
  
  
    }
  

);

}
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
  

//////////////////////////////////////////======================/////



//////////////
newForm(){

  var oldFact=this.Fact_Id?.value;
  var tranDate=this.Tran_Date?.value;
  var traCd= this.Tran_Code?.value;
  var oldStore =this.Store_Id?.value;
  var oldPage =this.Page?.value;



  this.tranIncomeForm.reset();
  
  this.tranIncomeForm.get('Fact_Id')?.setValue(oldFact);
  this.tranIncomeForm.get('Tran_Date')?.setValue(tranDate);
  this.tranIncomeForm.get('Tran_Code')?.setValue(traCd);
  this.tranIncomeForm.get('Store_Id')?.setValue(oldStore);

 
  
  

  this.tranIncomeForm.get('Page')?.setValue(oldPage);

  // this.Page1.nativeElement.value=0;
  // this.Ser1.nativeElement.focus();
  // this.Page1.nativeElement.value=oldPage;

   
 
}
//=============================================++++++++++++++=======
getTranById(){

  //===============================================================================================
  let  ff =sessionStorage.getItem('fact');

  if(    (ff !== null && this.Fact_Id?.value > parseInt(ff)+4)     ||(ff !== null && this.Fact_Id?.value < parseInt(ff)     )  )
  {    
    this.toastr.error("المصنع ليس من اختصاصك");
    this.tranIncomeForm.get('Fact_Id')?.setValue(parseInt(ff) );
    return;
  }
  ///=============================================

  this.inServ.GetTranById(this.Fact_Id?.value,this.Tran_Date?.value,this.Tran_Code?.value,this.Page?.value,this.Ser?.value).subscribe(
 
    (Response: any) => {

      //this.iap=Response;
      
      console.log(Response);
      

      
      this.tranIncomeForm.get('Store_Id')?.setValue(Response.store_Id);
      this.getSoreName();
      this.tranIncomeForm.get('Som_Type')?.setValue(Response.som_Type);
      this.tranIncomeForm.get('Som_Id')?.setValue(Response.som_Id);
      this.tranIncomeForm.get('Ord_Type')?.setValue(Response.ord_Type);
      this.tranIncomeForm.get('Ord_Id')?.setValue(Response.ord_Id);
      this.tranIncomeForm.get('Item_No')?.setValue(Response.item_No);
      this.getItemName()
      this.tranIncomeForm.get('Quantity')?.setValue(Response.quantity);
      this.tranIncomeForm.get('Value')?.setValue(Response.value);
      this.tranIncomeForm.get('Exe_Rec_No')?.setValue(Response.exe_Rec_No);

      const Exe_Rec_Date = new Date(Response.exe_Rec_Date);

      const formattedDate1 = Exe_Rec_Date.toISOString().substring(0, 10);
      
      this.tranIncomeForm.get('Exe_Rec_Date')?.setValue(formattedDate1);


     
    // console.log('------------------');
    //   console.log(Response.exe_Rec_Date);
      

      this.tranIncomeForm.get('InvoiceOrSendNo')?.setValue(Response.invoiceOrSendNo);

      const InvoiceOrSendDate = new Date(Response.invoiceOrSendDate);
      
      const formattedDate2 = InvoiceOrSendDate.toISOString().substring(0, 10);
      
      this.tranIncomeForm.get('InvoiceOrSendDate')?.setValue(formattedDate2);

      if(Response.InvoiceOrSendDate == null)       this.tranIncomeForm.get('InvoiceOrSendDate')?.setValue(null);

      this.tranIncomeForm.get('Car_No')?.setValue(Response.car_No);

      this.tranIncomeForm.get('ACC_NO')?.setValue(Response.acC_NO);
      
      this.getAccName();

      this.tranIncomeForm.get('Supplier')?.setValue(Response.supplier);

      this.getSupName();











      //


    //  this.Orderform.get('Ord_Date')?.setValue(Response.ord_Date);

      //eng_No

      this.tranIncomeForm.get('Cause')?.setValue(Response.cause);

      this.tranIncomeForm.get('Fnl_Id')?.setValue(Response.fnl_Id);
     
      // this.Orderform.get('Fnl_Date')?.setValue(formatDate(Response.fnl_Date,("yyyy/mm/dd"), 'ar-EG'));

//      this.Orderform.get('Fnl_Date')?.setValue(formatDate((Response.fnl_Date).toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'));
const fnlDate = new Date(Response.fnl_Date);
const formattedDate = fnlDate.toISOString().substring(0, 10);
this.tranIncomeForm.get('Fnl_Date')?.setValue(formattedDate);

    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }


  );





}

///=========================================================

addInTran(){
  //===============================

  let  ff =sessionStorage.getItem('fact');

  if(    (ff !== null && this.Fact_Id?.value > parseInt(ff)+4)     ||(ff !== null && this.Fact_Id?.value < parseInt(ff)     )
  )
  {    
    this.toastr.error("المصنع ليس من اختصاصك");
    this.tranIncomeForm.get('Fact_Id')?.setValue(parseInt(ff) );
    return;
  }
  ///====================================

  if(this.InvoiceOrSendDate?.value=='')  this.tranIncomeForm.get('InvoiceOrSendDate')?.setValue(null);
  if(this.Exe_Rec_Date?.value=='')  this.tranIncomeForm.get('Exe_Rec_Date')?.setValue(null);


  if(this.tranIncomeForm.valid)
  {
 
   console.log(this.tranIncomeForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.inServ.AddNewTran(this.tranIncomeForm.value).subscribe(
     next => {
 
       // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
       // var appName=sessionStorage.getItem('grName');
       // this.rout.navigate(['userLogin',appName]);
       this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
 
 
 
     },
     
     error => {
 
      this.toastr.error("خطأ","خطأ");
      console.log(error);
     
     
     
     }
 
 
   );
 
 
 
  }

  else this.toastr.warning("من فضلك استكمل البيانات","تنبيه");

  this.Page1.nativeElement.focus();








}

//===============================================================

updInTran(){

  let  ff =sessionStorage.getItem('fact');

  if(    (ff !== null && this.Fact_Id?.value > parseInt(ff)+4)     ||(ff !== null && this.Fact_Id?.value < parseInt(ff)     )
  )
  {    
    this.toastr.error("المصنع ليس من اختصاصك");
    this.tranIncomeForm.get('Fact_Id')?.setValue(parseInt(ff) );
    return;
  }


  if(this.InvoiceOrSendDate?.value=='')  this.tranIncomeForm.get('InvoiceOrSendDate')?.setValue(null);

  if(this.Exe_Rec_Date?.value=='')  this.tranIncomeForm.get('Exe_Rec_Date')?.setValue(null);
  
  if(this.tranIncomeForm.valid)
  {
 
   //console.log(this.tranIncomeForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   this.inServ.UpdTran(this.tranIncomeForm.value).subscribe(
     
    
     next => {
       this.toastr.success("تم التعديل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
     }
     , error => { this.toastr.error("خطأ", "خطأ"); });

  }
  
  }
  
 


///=============================================================

deleteInTran(){
  let  ff =sessionStorage.getItem('fact');

  if(    (ff !== null && this.Fact_Id?.value > parseInt(ff)+4)     ||(ff !== null && this.Fact_Id?.value < parseInt(ff)     )
  )
  {    
    this.toastr.error("المصنع ليس من اختصاصك");
    this.tranIncomeForm.get('Fact_Id')?.setValue(parseInt(ff) );
    return;
  }
  // Perform your desired check or actions here

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

  




//   const dialogRef = this.dialog.open(ConfirmationComponent, {

//     data: {res:0},  });

//     dialogRef.afterClosed().subscribe(result  => {

//       this.test = result;
      
//     alert(this.test);

  
//   });


//   console.log(this.test);
//   if(this.test==1){
//     this.inServ.DelTran(this.Fact_Id?.value,this.Tran_Date?.value,this.Tran_Code?.value,this.Page?.value,this.Ser?.value).subscribe(
//       next => {
  
//         // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
//         // var appName=sessionStorage.getItem('grName');
//         // this.rout.navigate(['userLogin',appName]);
//         this.toastr.success("تم الحذف بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
  
  
  
//       },
      
//       error => {  
//        this.toastr.error("خطأ","خطأ");     }
   
//     );
//       }

// }
//==========================================================



}

onSelectionChange(event: any) {
 
}
onDropdownOpened(event: any) {
  // Add an event listener to the input field within the dropdown panel
  const inputElement = event.elementRef.nativeElement.querySelector('input');
  inputElement.addEventListener('input', (inputEvent: any) => {
    // Update the selected value based on the input
    const inputValue = inputEvent.target.value;
    // You can use inputValue to filter your facts array or perform other actions
    console.log('Input value:', inputValue);
  });
}

onEnter(event: KeyboardEvent) {
  const target = event.target as HTMLInputElement; // Assuming input field
  if (target && target.nextElementSibling) {
    (target.nextElementSibling as HTMLElement).focus(); // Type assertion for focus
    event.preventDefault();
  }
}


}


