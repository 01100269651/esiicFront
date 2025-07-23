import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppUser } from '../../Models/iapp-user';
import { AuthUserService } from '../../Services/auth-user.service';
import { ToastrService } from 'ngx-toastr';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { transition, trigger, useAnimation } from '@angular/animations';
import { backInLeft, backInRight, bounce, jackInTheBox, zoomInRight, zoomInUp, zoomOutDown } from 'ng-animate';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'], animations: [
    trigger('zoomInUp', [transition('* => *', useAnimation(zoomInUp, {   params: { timing: 2, delay: 0 }    }))]),
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox, {   params: { timing: 2, delay: 0 }    }))]),
    trigger('backInLeft', [transition('* => *', useAnimation(backInLeft, {   params: { timing: 2, delay: 0 }    }))]),
    trigger('backInRight', [transition('* => *', useAnimation(backInRight, {   params: { timing: 2, delay: 0 }    }))]),
    trigger('zoomInRight', [transition('* => *', useAnimation(zoomInRight, {   params: { timing: 2, delay: 0 }    }))]),
    

    
  ],
})
export class UserLoginComponent implements OnInit {
  isLoading=false;
  usrLoginForm!:FormGroup;
 // ff?:IAppUser[];
  recAppName?:string='';
bounce: any;
myTiming!: any;
myDelay!: any;
backInLeft!: any;
backInRight!: any;
zoomInRight!:any;
  constructor(private entertotab:EnterToTabService,private actvRout:ActivatedRoute,private fb:FormBuilder ,private usrCtrl:UserContrlService,
    private toastr: ToastrService ,private au:AuthUserService , private rout:Router)
  {
    entertotab.handleEnterKey();
    this.usrLoginForm= this.fb.group({

      Id :['',Validators.required],
    
      Password :['',Validators.required] });
    


  }
get Id(){return this.usrLoginForm.get('Id');}
get Password(){return this.usrLoginForm.get('Password');}



  ngOnInit(): void {
    this.recAppName= this.actvRout.snapshot.paramMap.get('appName')?.toString();
  }



  SendUser(){


    if(this.usrLoginForm.valid)
    {
      this.isLoading=true;

      //alert("");

     // console.log(this.grLoginForm.value)
   


//       this.toastr.info('جارى التأكد من البيانات', 'معلومات');
//  // this.ff= this.au.GroupLogin(this.grLoginForm.value);
  this.au.UserLogin(this.usrLoginForm.value).subscribe(
    next => {

   
      this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
      var userName=sessionStorage.getItem('userName');
      var appId =sessionStorage.getItem('appId');
      var Fact= sessionStorage.getItem('fact');

      //========================================================================================
      this.usrCtrl.getIPAddress().subscribe(
 
        (Response: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(Fact) , User_Id:this.Id?.value,
      
          Dept_Id:Number(appId?.toString()),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة تسجيل دخول المستخدمين',Action:'open window',Order:'',Order_Type:'',
      
      
            Ip_Address: Response.ip
          };
         
          // console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
          console.log(Response);
        });
    
        this.isLoading=false
 //========================================================================================
      if (appId == '0'  )

      this.rout.navigate(['ITHome']);

    else  if (appId =='1')

      this.rout.navigate(['DMHome']);

    else  if (appId =='2')

      this.rout.navigate(['PurHome']);
    
    
    else  if (appId =='3')
      
      this.rout.navigate(['Stocks']);
      
    else  if (appId =='4')
      
    this.rout.navigate(['CalStocks']);

    else  if (appId =='6')
      
    this.rout.navigate(['TopMgmnt']);

    else  if (appId =='7')
      
    this.rout.navigate(['Review']);

   

    
    
    },
    
    error =>{
      
     this.toastr.error("خطأ","خطأ");
    
     this.isLoading=false
    
    }


  );
  
  
  // {
  //   // this.toastr.success(this.ff[0].Name.toString(),"جارى توجيهك لهذا التطبيق");
  //   // this.rout.navigate(['userLogin',this.ff[0].Name.toString()]);

  //   this.toastr.success("تمام","تمام");

  // } 
    //  else  this.toastr.warning("كود التطبيق أو كلمة المرور غير صحيحة","تحذير");
    // 
  }

    else
    this.toastr.error('توجد مشكلة في البيانات', ' توجد مشكلة في بيانات النموذج');

  }
  moduleLogin(){

  //   if(this.usrLoginForm.valid)
  //   {
   


  //     this.toastr.info('جارى التأكد من البيانات', 'معلومات');
  // this.ff= this.au.moduleLogin(this.usrLoginForm.value);
  // if(this.ff.length >0)  {

  //                          // برنامج نظم المعلومات

  //                          if(this.ff[0].AppGrId==0)
  //                          { this.toastr.success(this.ff[0].UserName.toString(),"اسم المستخدم");
  //                           this.rout.navigate(['ITHome']);}

  //                         // برنامج مراقبة المخزون

  //   if(this.ff[0].AppGrId==1)
  //  { this.toastr.success(this.ff[0].UserName.toString(),"اسم المستخدم");
  //   this.rout.navigate(['DMHome']);}
  //                           // المشتريات 
  //   if(this.ff[0].AppGrId==2)
  //   { this.toastr.success(this.ff[0].UserName.toString(),"اسم المستخدم");
  //    this.rout.navigate(['PurHome']);}
  //    //////////////////////////////////////
  //                           // المخزن العام
  //    if(this.ff[0].AppGrId==3)
  //   { this.toastr.success(this.ff[0].UserName.toString(),"اسم المستخدم");
  //    this.rout.navigate(['Stocks']);}

  //                 // حسابات المخازن
  //                 if(this.ff[0].AppGrId==4)
  //   { this.toastr.success(this.ff[0].UserName.toString(),"اسم المستخدم");
  //    this.rout.navigate(['STMHome']);}

  //                 // الصيانة الوقائية
  //                 if(this.ff[0].AppGrId==5)
  //   { this.toastr.success(this.ff[0].UserName.toString(),"اسم المستخدم");
  //    this.rout.navigate(['MAINTHome']);}







  // } 
  //    else  this.toastr.warning("كود التطبيق أو كلمة المرور غير صحيحة","تحذير");
  //   }

  //   else
  //   this.toastr.error('توجد مشكلة في البيانات', ' توجد مشكلة في بيانات النموذج');



  }


}
