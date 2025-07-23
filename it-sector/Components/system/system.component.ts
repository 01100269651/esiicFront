import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ScmSystemConfigService } from 'src/it-sector/Services/scm-system-config.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent {

  sysInfo:any[]=[];
  systemForm!:FormGroup;
  constructor(private fb:FormBuilder ,private sysConfigSer:ScmSystemConfigService,
    private toastr:ToastrService ,private usrCtrl:UserContrlService ,   private entertotab:EnterToTabService
    ){


      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

      
    this.systemForm = this.fb.group({

      Sys_Id :[1],

      Com_Name: ['',Validators.required],

      // Tran_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required], System_Name

      System_Name: [ '', Validators.required],

      Fin_Start: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

      Fin_End: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required]
  });
  ///////////////////
  this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة بيانات النظام  ',Action:'open window ',Order:'',Order_Type:'',
  
  
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

  this.sysConfigSer.GetSysById(1).subscribe(
    (Response: any) => {

      console.log(Response);
        
        this.sysInfo=Response.name;
        this.systemForm.get('Com_Name')?.setValue(Response.com_Name);
        this.systemForm.get('System_Name')?.setValue(Response.system_Name);

        const f_Date = new Date(Response.fin_Start);
        const month = String(f_Date.getMonth() + 1).padStart(2, '0');
        const day = String(f_Date.getDate()).padStart(2, '0');
        const year = String(f_Date.getFullYear());
        const formattedDate1 = `${year}-${month}-${day}`;
        console.log(formattedDate1);
        this.systemForm.get('Fin_Start')?.setValue(formattedDate1);

        //==========================================================================

        const e_Date = new Date(Response.fin_End);

        const month1 = String(e_Date.getMonth() + 1).padStart(2, '0');

        const day1 = String(e_Date.getDate()).padStart(2, '0');

        const year1 = String(e_Date.getFullYear());

        const formatted = `${year1}-${month1}-${day1}`;

        console.log(formatted);

        this.systemForm.get('Fin_End')?.setValue(formatted);

      },
        
      error => {
    
    
      }
    
  );
  


}
get Com_Name(){return this.systemForm.get('Com_Name');}
  
get System_Name(){return this.systemForm.get('System_Name');}

get Fin_Start(){return this.systemForm.get('Fin_Start');}

get Fin_End(){return this.systemForm.get('Fin_End');}

updSystem(){

  
  // const fdate= new Date(this.systemForm.get('Fin_Start')?.value);

  // this.systemForm.get('Fin_Start')?.setValue(fdate);

  

  // const edate= new Date(this.systemForm.get('Fin_End')?.value);
  // this.systemForm.get('Fin_End')?.setValue(edate);


  this.sysConfigSer.updSystemInfo(this.systemForm.value).subscribe(
     
    
    next => {
      this.toastr.success("تم التعديل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });
      ///////////////////
  this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة بيانات النظام  ',Action:'تعديل ',Order:'',Order_Type:'',
  
  
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
    , error => { this.toastr.error("خطأ", "خطأ"); });

 }

}

