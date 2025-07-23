import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';

import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { OrderComponent } from '../order/order.component';




@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  displayedColumns: string[] = ['scM_Fact.name','scM_Dept.name','ord_Date','cause','ord_Id','type','actions' ,'actionsNo' ];
  // ,'Store_Id','scM_Store.name','Tran_Date','Page','Ser','Cost_ID','scM_Item.name','Quantity','Exe_Rec_No','Exe_Rec_Date'];

  itms:any[]=[];
  fact:any="";
  isLoading:boolean=false;
  finYear:any="";

  constructor(public dialog: MatDialog,private ordSer:OrdMstrService ,private usrCtrl:UserContrlService ,private toastr:ToastrService ){
   this.isLoading=true;
  this.fact=sessionStorage.getItem("fact");
  this.finYear=sessionStorage.getItem("FinYear");


 

    this.ordSer.GetOrdByFact(this.fact, this.finYear).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        
  
        
        this.itms= Response;
  
        this.isLoading=false;
  
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console
  
    
    
      }
  
  
    );

    this.isLoading=false;

    //////

this.usrCtrl.getIPAddress().subscribe(
 
  (x: any) => {

    //this.iap=Response;
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة قائمة طلبات الشراء',Action:'open',Order:'',Order_Type:'',


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


  }

  fun(tp:any,id:any){
   // alert(i);
   this.ordSer.SignOkIc(tp,id).subscribe(
    (x:any)=>{
      this.toastr.success("تم اعتماد مراقبة المخزون")
    },
    error=>{
      this.toastr.error("لم يتم اعتماد مراقبة المخزون")
    }


   );
  }

  funNo(tp:any,id:any){
    // alert(i);
    this.ordSer.SignNotOkIc(tp,id).subscribe(
     (x:any)=>{
       this.toastr.success("تم  رفض الطلب")
     },
     error=>{
       this.toastr.error("لم يتم  رفض الطلب")
     }
 
 
    );
   }
  

   openDialog2(fact:any,Season:any,Type:any,Ord_Id:any): void{

  


    const dialogRef = this.dialog.open(OrderComponent, {

      data: {Fact: fact, Seson: Season, Type:Type,Id:Ord_Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });



  }

  }
