import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
export interface Dialog2Data {
  Fact: string ;
  Seson: string;
  Type: string;
  Id: string;
}

@Component({
  selector: 'app-ord-details',
  templateUrl: './ord-details.component.html',
  styleUrls: ['./ord-details.component.css']
})
export class OrdDetailsComponent {
  itms:any[]=[];
  constructor( public dialogRef: MatDialogRef<OrdDetailsComponent>,   private entertotab:EnterToTabService, @Inject(MAT_DIALOG_DATA) public data: Dialog2Data,
  private ordItemSer:OrdMstrService ,  private usrCtrl:UserContrlService
  ){
    
///////////////////////////////////////////////////========================      
entertotab.handleEnterKey();
///////////////////////////////////////////////////========================

    this.ordItemSer.getOrdAllItms(this.data.Fact,this.data.Seson,this.data.Type,this.data.Id).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        
  
        
        this.itms= Response;
        
  
  
  
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console
  
    
    
      }
  
  
    );
  



    
        ///////////////////
        this.usrCtrl.getIPAddress().subscribe(
 
          (x: any) => {
        
            //this.iap=Response;
            let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
        
            Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
        
            Win_Name:'شاشة بيانات طلب الشراء',Action:'عرض ',Order:this.data.Id,Order_Type:this.data.Type,
        
        
              Ip_Address: x.ip
            };
           
            // console.log(ctrl.Order);
            this.usrCtrl.addCtrl(ctrl).subscribe(
              next => {},
              error=>{}
              
        
            );
            
            console.log(Response);
          });
      
      
        /////////////////////////////

  }

}
