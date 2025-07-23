import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-rview-side-menus',
  templateUrl: './rview-side-menus.component.html',
  styleUrls: ['./rview-side-menus.component.css']
})
export class RviewSideMenusComponent {
constructor(private toastr: ToastrService  , private rout:Router , private usrCtrl:UserContrlService){

}

  signOut(){
       ///////////////////
  this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'الخروج من النظام ',Action:'تسجيل خروج ',Order:'',Order_Type:'',
  
  
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

  this.toastr.show("جارى تسجيل الخروج","الخروج من النظام");
  sessionStorage.clear();
  this.rout.navigate(['']);
   


  }

}
