import { Component } from '@angular/core';
import { Router,  Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsrCtrl } from '../Interfaces/iusr-ctrl';
import { UserContrlService } from '../Services/user-contrl.service';
import { MatDialog } from '@angular/material/dialog';
import { UserControlComponent } from 'src/it-sector/Components/user-control/user-control.component';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { OrderLogComponent } from '../Components/order-log/order-log.component';




@Component({
  selector: 'app-it-menu',
  templateUrl: './it-menu.component.html',
  styleUrls: ['./it-menu.component.css'],

})
export class ItMenuComponent {

  itUserSearchForm!:FormGroup;

  usrName:any;

  constructor(private toastr: ToastrService ,
    private fb:FormBuilder , 
    private rout:Router ,
    public dialog: MatDialog, private usrCtrl:UserContrlService){
    this.usrName=sessionStorage.getItem('userName');

    this.itUserSearchForm = this.fb.group({

      userId :['',Validators.required],
        
  
    
    });
  }
  get userId(){return this.itUserSearchForm.get('userId');}
  SignOut(){
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
  this.rout.navigate(['']);
    sessionStorage.clear();
  //  this.navigat.()
  }

  search(){

   console.log(this.userId?.value);

  var x=  this.userId?.value.toString().charAt(0);

 if (x !='o'){

      const dialogRef = this.dialog.open(UserControlComponent, {
        
        data: {ItemId: this.userId?.value},
      });
  }



  var typ= this.userId?.value.toString().charAt(1);
  
  var ord=this.userId?.value.toString().slice(2);
  
    if (x=='o') {
    

  const dialogRef2 = this.dialog.open(OrderLogComponent, {
        
  data: {Type: typ,Id:ord},

  });

}}}