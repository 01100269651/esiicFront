import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthGrpService } from '../../Services/auth-grp.service';

import { Router } from '@angular/router';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { ScmSystemConfigService } from 'src/it-sector/Services/scm-system-config.service';
import { ListKeyManager } from '@angular/cdk/a11y';
import { ThemePalette } from '@angular/material/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeInBottomRight, fadeInDown, fadeInDownBig, flash, flipIn, flipInX, jackInTheBox, rollIn, rollOut, rotateInDownRight, zoomInDown, zoomInLeft, zoomInRight, zoomOutRight } from 'ng-animate';
import { waitForAsync } from '@angular/core/testing';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';


export interface IuserCtrl {
  Fact_Id:number;
  User_Id:string;
  Dept_Id :string;
  Tran_Date:Date;
  Tran_Time:Date;
  Win_Name:string;
  Action:string ;
  Order:string;
  Ip_Address: string;


}


@Component({
  selector: 'app-group-login',
  templateUrl: './group-login.component.html',
  styleUrls: ['./group-login.component.css'], animations: [
 
    trigger('fadeInDown', [transition('* => *', useAnimation(jackInTheBox, {   
      params: { timing: 2,  a: '-3000px',
    b: '25px',
    c: '-10px',
    d: '5px', } 
     }))]),
     trigger('zoomOutRight', [transition('* => *', useAnimation(zoomOutRight, {   
      params: { timing: 2,  a: '3000px',
    b: '25px',
    c: '-10px',
    d: '5px', } 
     }))]),
    trigger('fadeInBottomRight', [transition('* => *', useAnimation(fadeInDown, {   params: { timing: 2,  a: '3000px',
      b: '25px',
      c: '-10px',
      d: '5px', }    }))])
      ,
      trigger('zoomInLeft', [transition('* => *', useAnimation(zoomInLeft, {   params: { timing: 2,  a: '3000px',
        b: '25px',
        c: '-10px',
        d: '5px', }    }
      
      ))])
        ,
    trigger('zoomInDown', [transition('* => *', useAnimation(zoomInDown, {   params: { timing: 3, delay: 0 , a: '-3000px',
      b: '25px',
      c: '-10px',
      d: '5px', }    }))])
      ,
      trigger('zoomInRight', [transition('* => *', useAnimation(zoomInRight, {   params: { timing: 3, delay: 0 , a: '3000px',
        b: '25px',
        c: '-10px',
        d: '5px', }    }))])
  ],
  

})
export class GroupLoginComponent implements OnInit {

  

  grLoginForm:FormGroup;
  
  isLoading=false;
bounce: any;
flash: any;
myTiming!: any;
myDelay:number= 0;
fadeInDown: any;
fadeInBottomRight: any;
zoomInRight: any;
zoomInLeft :any;
zoomInDown: any;
zoomOutRight: any;
exDel:number=100;

ngOnInit(): void {

  
//   $(document).ready(function () {
//     $("input").not($(":button"))
//         .keypress(function (evt) {
//             if (evt.keyCode == 13) {
//                 var iname = $(this).val();
//                 if (iname !== 'Submit') {
//                     var fields = $(this).closest('form, body').find('button, input, textarea, select');
//                     var index = fields.index(this);
//                     if (index > -1 && (index + 1) < fields.length) {
//                         fields.eq(index + 1).focus();
//                     }
//                     return false; // Return false if iname is not 'Submit'
//                 }
//                 return true; // Return true if iname is 'Submit'
//             }
//             return true; // Return true if the key pressed is not Enter
//         });
// });
}
  constructor(private fb:FormBuilder ,private toastr: ToastrService ,private au:AuthGrpService,
    private usrCtrl:UserContrlService, private rout:Router,private ConFig:ScmSystemConfigService ,private entertotab:EnterToTabService){
      // this.ConFig.getFinialYear().subscribe(
        
      //   (x:any)=>{
          

      entertotab.handleEnterKey();
       
      //      sessionStorage.setItem('FinYear',x.seson);

          

      //   },error=>{}
      // );

   

this.grLoginForm= this.fb.group({

  App_Id :['',Validators.required],

  App_Password :['',Validators.required] });

 
this.usrCtrl.getIPAddress().subscribe(
 
  (Response: any) => {
    //this.iap=Response;
    let ctrl: IuserCtrl = {Fact_Id:0 ,User_Id:'',

    Dept_Id:'',Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة تسجيل دخول المجموعة',Action:'open window',Order:'',


      Ip_Address: Response.ip
    } ;
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
    
    console.log(Response);
  },error=>{


  });

}

  get App_Id(){return this.grLoginForm.get('App_Id');}

  get App_Password(){return this.grLoginForm.get('App_Password');}


  SendGrp(){


    if(this.grLoginForm.valid)
    {
      this.isLoading=true;


     // console.log(this.grLoginForm.value)
   


//       this.toastr.info('جارى التأكد من البيانات', 'معلومات');
//  // this.ff= this.au.GroupLogin(this.grLoginForm.value);
  this.au.GroupLogin(this.grLoginForm.value).subscribe(
    async next => {

      this.toastr.success("كلمة مرور صحيحة");
      this.exDel=0;
      // await waitTwoSeconds();
      var appName=sessionStorage.getItem('grName');
      var tok=sessionStorage.getItem('grToken');
      if(tok){
      this.rout.navigate(['userLogin',appName]);
      this.isLoading=false;
      }


    },
    
    error =>{
     this.toastr.error("كلمة مرور التطبيق غير صحيحة","رسالة هامة");
     this.isLoading=false;
    
    
    }


  );
  
  async function waitTwoSeconds() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
  
  // {
  //   // this.toastr.success(this.ff[0].Name.toString(),"جارى توجيهك لهذا التطبيق");
  //   // this.rout.navigate(['userLogin',this.ff[0].Name.toString()]);

  //   this.toastr.success("تمام","تمام");

  // } 
    //  else  this.toastr.warning("كود التطبيق أو كلمة المرور غير صحيحة","تحذير");
    // 
  }

    else
    this.toastr.error('  يرجي استكمال البيانات ', ' توجد مشكلة في بيانات النموذج');

  }
  cancel(){
    window.close();
  }
  openUser(appName:string){


  }

  
/////////////////////////////////////////////////////////////////




  








}
///
