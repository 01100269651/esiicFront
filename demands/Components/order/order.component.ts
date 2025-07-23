import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ord } from 'list';
import { ToastrService } from 'ngx-toastr';
import { OrdItmService } from 'src/demands/Services/ord-itm.service';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
export interface Dialog2Data {
  Fact: string ;
  Seson: string;
  Type: string;
  Id: string;
}

export interface OrderItems{
No:String;
Name:string;
Qty:number;
Bal:number;
Cons1:number;
Cons2:number;
Cons3:number;
Rate:number;
IncomeJuly:number;
Rec_No:string;
Rec_date:Date;
Sup:string;
Price:number;

}
export interface BasicOrd{
  dept_id:string;
  dept_Name:string;
  

}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})


export class OrderComponent {

  itms:any[]=[];
  mainO:any[]=[];
  rate:number=0;
  x!:BasicOrd;
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

  displayedColumns: string[] =['position','item_No','scM_Item.name','tech_Descr','quantity','balance','cons1','cons2','cons3','incomeJuly','old_Rec_Id','old_Rec_Date','old_Price','old_Sup_Id']
  displayedColumns2: string[] =['tech_Descr']
  displayedFooter:string[]=['quantity'];
  constructor( public dialogRef: MatDialogRef<OrderComponent> , @Inject(MAT_DIALOG_DATA) public data: Dialog2Data,private oItmSer:OrdItmService,
  private ordItemSer:OrdMstrService ,  private mainOrd:OrdMstrService , private usrCtrl:UserContrlService,private toastr:ToastrService
  ){

    
    this.ordItemSer.getOrdAllItms(this.data.Fact,this.data.Seson,this.data.Type,this.data.Id).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        
  
        
        this.itms= Response;
        this.total = 0;

        if (this.itms)
    
          for (let row of this.itms) {
    
            if (row.id != 0) this.total += row.quantity;
            console.log(row.quantity);
    
          }
    
         // alert(this.total);
  
  
  
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console
  
    
    
      }
  
  
    );
    this.cdate=new Date()

    this.mainOrd.GetOrdById(this.data.Fact,this.data.Seson,this.data.Type,this.data.Id).subscribe(
    (Response:any)=>
    {
      console.log(Response.scM_Dept.name);
      console.log(Response.scM_Fact.name);

      this.mainO=Response;
      //console.log(Response);
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

    Win_Name:'شاشة تقرير طلب الشراء ',Action:'عرض',Order: this.data.Id,Order_Type:this.data.Type ,


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
  updateQty(Fact_Id:any,Type:any,Season:any,Ord_Id:any , Item_No:any,Quantity:any){
   let output: JSON;
let obj: any = 
{
  'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity

};

output = <JSON>obj;

console.log(output)

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
 //console.log(x)
  }
  fun(){
    return true;
  }

}
