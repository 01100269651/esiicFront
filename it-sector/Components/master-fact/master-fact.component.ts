
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { any } from 'list';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { MasterFactService } from 'src/it-sector/Services/master-fact.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({

  selector: 'app-master-fact',

  templateUrl: './master-fact.component.html',

  styleUrls: ['./master-fact.component.css']

})

export class MasterFactComponent {

  masterfactForm!:FormGroup;

  selectedFile: File | null = null;

  isLoading:Boolean=false;

  constructor(private fb:FormBuilder ,   private entertotab:EnterToTabService ,private toastr: ToastrService, private mfService:MasterFactService,private usrCtrl:UserContrlService){

   
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

      
    this.masterfactForm = this.fb.group({

      Fact :['',Validators.required]

    
    });


    //////////////////////////
    this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(localStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة masterfact  ',Action:'open ',Order:'',Order_Type:'',
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
        console.log(Response);
      });

    /////////////////////////////////
    
  }


  onFileSelected(event: any) {

    this.selectedFile = event.target.files[0];
  } 
  get Fact()
  {return this.masterfactForm.get('Fact');}


  ////========================================================================================================================

  newFact(){

   


  if(this.masterfactForm.valid)

  {
 


    
   console.log(this.masterfactForm.value);
   this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
 
   
    this.isLoading=true;
  
   this.mfService.addNew(this.masterfactForm.value).subscribe(
     next => {
 
       this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
       this.isLoading=false;

      },
     
     error => {      this.toastr.error("خطأ","خطأ");     });
 
 

 

   
 
  



this.isLoading=false;

    }
  }}
