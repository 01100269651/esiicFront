import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { backInDown, bounce } from 'ng-animate';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-bkgrnd',
  templateUrl: './bkgrnd.component.html',
  styleUrls: ['./bkgrnd.component.css']
  ,animations: [
    trigger('bounce', [transition('* => *', useAnimation(backInDown, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 2, delay: 0 }
    }))])
  ],
})

export class BkgrndComponent  implements OnInit {
bounce: any;
myTiming!: any;
myDelay!: any;
  constructor( private usrCtrl:UserContrlService ){
    
      ///////////////////////////////////
     

      ////////////////////////////
          //========================================================================================
          this.usrCtrl.getIPAddress().subscribe(
 
            (Response: any) => {
          
              //this.iap=Response;
              let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('id')),
          
              Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
          
              Win_Name:'شاشة نظم المعلومات الأم',Action:'open window',Order:'',Order_Type:'',
          
          
                Ip_Address: Response.ip
              };
             
              // console.log(ctrl.Order);
              this.usrCtrl.addCtrl(ctrl).subscribe(
                next => {},
                error=>{}
                
          
              );
              
              console.log(Response);
            });
        
    
     //========================================================================================
  }

  ngOnInit(): void {
    
    // alert('Comming');
    
  }

}
