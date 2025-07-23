import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';
import { retry } from 'rxjs';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { OrdItmService } from 'src/demands/Services/ord-itm.service';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
export interface Dialog3Data {
  Fact: string ;
  Seson: string;
  Type: string;
  Id: string;
  sign:number|null;
}

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css']
})
export class OrderBuyComponent  {
  dataSource: any;
  
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  signFlag:boolean=false;
  itms:any[]=[];
  mainO:any[]=[];
  rate:number=0;
  // x!:BasicOrd;
  fact!:string;
  factId!:number;
  dept!:string;
  ordId!:string;
  ordType!:string;
  cause!:string;
  typeName!:string;
  ordDate!:Date;
  cdate:Date;
  total:number=0;
  fnlId:number=0;
  fnlDate!:Date;
   ses:any;
   icImg:any;
   isActive = false;
   signIc=0;
   signStocks=0;
   signStockCal=0;
   signEngMan=0;

   signFin=0;

   signReview=0;

   signViceCEOFact=0;

   signCEOFact=0;

   app_Id=false;



  displayedColumns: string[] =['position','item_No','item_Name','unit_Name','quantity','balance',

  'cons3','cons2','cons1','incomeJuly','old_Rec_Id','old_Rec_Date','old_Price','old_Sup_Id','show_Id'];

  displayedFooter:string[]=['quantity'];

  @ViewChild (MatPaginator) paginator!: MatPaginator;
    


  constructor( public dialogRef: MatDialogRef<OrderBuyComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: Dialog3Data,
     private oItmSer:OrdItmService,
  private ordItemSer:OrdMstrService ,  
  private mainOrd:OrdMstrService ,
   private usrCtrl:UserContrlService,
   private toastr:ToastrService ,private entertotab:EnterToTabService
  ){

    
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    var appId = sessionStorage.getItem('appId');
     this.app_Id = Number(appId) === 2;
    
    this.ses=sessionStorage.getItem('FinYear');
    this.ordItemSer.getOrdAllItms(this.data.Fact,this.data.Seson,this.data.Type,this.data.Id)
    .pipe(retry(3))
    .subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        //  console.log(Response);
        
  
        
        this.itms= Response;
        this.total = 0;

        // if (this.itms)
    
        //   for (let row of this.itms) {
    
        //     if (row.id != 0) this.total += row.quantity;
        //     console.log(row.quantity);
    
        //   }
    
         // alert(this.total);

    this.dataSource = new MatTableDataSource(Response);
    this.dataSource.data = Response;
    this.dataSource.length = Response.length;
    this.dataSource.paginator = this.paginator; // Connect the paginator here
    const dataSource = new MatTableDataSource(Response);
    dataSource.paginator = this.paginator;
    // console.log(dataSource);
    // this.isLoading=false;
    dataSource.data=Response;
  
  
  
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console
  
    
    
      }
  
  
    );
    this.cdate=new Date();

    if(this.data.sign===1)
    this.signFlag=true;
  else
  this.signFlag=false;

    this.mainOrd.GetOrdById(this.data.Fact,this.data.Seson,this.data.Type,this.data.Id)
    .subscribe(
      
    (Response:any)=>
    {
    
      this.mainO=Response;
      console.log(Response);
      this.dept=Response.scM_Dept.name;
      this.factId=Response.scM_Fact.id;
      this.fact=Response.scM_Fact.name;
      this.ordId=Response.ord_Id;
      
      this.ordType=Response.type;
      
      if(this.ordType=='1') this.typeName="طلب شراء محلي";
      
      if(this.ordType=='2') this.typeName="طلب شراء فنى";
      
      this.ordDate=Response.ord_Date;
      
      this.cause=Response.cause;
      
      this.fnlId=Response.fnl_Id;
      
      this.fnlDate=Response.fnl_Date;



      this.signIc=Response.sign_IC;
      this.signStocks = Response.sign_Gnrl_Stocks;
      this.signStockCal = Response.sign_Cal_Stocks;
      this.signEngMan = Response.sign_Eng;
      this.signFin = Response.sign_Finance;
      this.signReview = Response.sign_Review;
      this.signViceCEOFact = Response.sign_Fact_Vice_CEO;
      this.signCEOFact = Response.sign_Fact_CEO     ;

      console.log(this.signIc);
      console.log(this.signEngMan);
      console.log(this.signReview);
      console.log(this.signViceCEOFact);
      console.log(this.signCEOFact);





    },
    error=>{

    }

    );
/////

//////

this.usrCtrl.getIPAddress().subscribe(
 
  (x: any) => {

    //this.iap=Response;
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة تقرير طلب الشراء ',Action:'عرض',Order: this.data.Id,Order_Type:this.data.Type,


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




////////////////////////////////
 
    
  

  }
  check(){
    if (this.signFlag)
      {
        this.toastr.error("الطلب معتمد");
      }

  }
//==============================

  updateQty(Fact_Id:any,Type:any,Season:any,Ord_Id:any , Item_No:any,Quantity:any){
  
   let output: JSON;


let obj: any = 
{
  'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity

};

output = <JSON>obj;

console.log(output)
var group=sessionStorage.getItem('grId');
const groupNumber = Number(group);

if([1,6,7].includes(groupNumber)){
 
   this.oItmSer.updItmQty(output).subscribe(
    next => {

      // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
      // var appName=sessionStorage.getItem('grName');
      // this.rout.navigate(['userLogin',appName]);
      this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });

      ///===============================================================================


      this.usrCtrl.getIPAddress().subscribe(

        (x: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة تقرير طلب الشراء',Action:'تعديل ',Order:this.data.Id,Order_Type:Type,
      
      
            Ip_Address: x.ip
          };
         
          // console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
          console.log(Response);
        });

      //===========================================================



    },

    error => {

      this.toastr.error("خطأ", "خطأ");



    }


  );
}
 //console.log(x)
 

  }

  addShow(fact:any,Ses:any, type:any,OrdId:any,itm:any){

    
    const show= sessionStorage.getItem('showId');

    let  xx={Fact:fact , Seson:Ses ,Type:type ,OrdId:OrdId ,Itm:itm , ShowId :show};

    const json = JSON.stringify(xx);

    console.log(json);

    this.oItmSer.putShowId(fact,Ses,type,OrdId,itm,show).subscribe(
      (x:any)=>{

        this.toastr.success("تم اختيار للصنف لعمل العروض")
      },
      error=>{}
    );

    this.toastr.show(fact);

    this.toastr.show(Ses);
    
    this.toastr.show(type);

    this.toastr.show(itm);

  }

}
