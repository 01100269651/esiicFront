import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { ItemService } from 'src/it-sector/Services/item.service';
import { ItmKindsService } from 'src/it-sector/Services/itm-kinds.service';
import { SCMUnitService } from 'src/it-sector/Services/scm-unit.service';
import { InqrItmNoOrNameComponent } from 'src/shared/Components/inqr-itm-no-or-name/inqr-itm-no-or-name.component';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
openSearchForItem() {

  const dialogRef = this.dialog.open(InqrItmNoOrNameComponent, {
          
    data: {Type: this.SearchItmId?.value ,Id:this.SearchItmId?.value},
  });


}
units:any[]=[];
kinds:any[]=[];
  itemForm!:FormGroup;
searchFormForItem!: FormGroup;
  constructor(private fb:FormBuilder
     ,public dialog: MatDialog,private toastr: ToastrService,
    private unitSer:SCMUnitService,
    private itmser:ItemService,
    private usrCtrl:UserContrlService,
    private itmsKind:ItmKindsService,
    private entertotab:EnterToTabService
  ){

    
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////


      
    this.getAllKinds();

    this.itemForm = this.fb.group({

      Id :['',[Validators.required,Validators.maxLength(9),Validators.minLength(9)]],
    
      Name:['',Validators.required],

      Unit_Id:['',Validators.required],

      Etab:[''],

      Group_Id:['',Validators.required],

      Kind :['',Validators.required],
      
      Entry_Date :[Date.now],

      Final_Date:[Date.now],

      Eng_No :[''],

      Eng_Name:['']


    
    });

    this.searchFormForItem = this.fb.group({
      SearchItmId: ['',Validators.required]});

    
    this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(localStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة أكواد الأصناف  ',Action:'open ',Order:'',Order_Type:'',
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
        console.log(Response);
      });
      
      //=======================================

      unitSer.getAll().subscribe(
        (z:any)=>{
          this.units=z;

        },
        error=>{}
      );

  }

  //====================================
  get SearchItmId(){
    return this.searchFormForItem.get('SearchItmId');
  }
//===============================
get Id(){
  return this.itemForm.get('Id');
}
  
//================================================================================


getAllKinds()
{
  this.itmsKind.getAll().subscribe(
 
    (Response: any) => {
      console.log(Response);
      this.kinds=Response;
},
error=>{

}
  );
}





//============================================Name
get Name(){
  return this.itemForm.get('Name');
}
//======================================================================
get Unit_Id(){
  return this.itemForm.get('Unit_Id');
}
//====............/////////////////////////////////////Etab
get Etab(){
  return this.itemForm.get('Etab');
}
///

get Group_Id(){
return this.itemForm.get('Group_Id');
}
//==================================

get Kind(){
  return this.itemForm.get('Kind');
  }
  ///======================================================
GetItemById(){

    this.itmser.GetItem(this.Id?.value).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        

        
        this.itemForm.get('Name')?.setValue(Response.name);
        //
        this.itemForm.get('Eng_Name')?.setValue(Response.eng_Name);
        //eng_No
        this.itemForm.get('Eng_No')?.setValue(Response.eng_No);
        //
        this.itemForm.get('Group_Id')?.setValue(Response.group_Id);
        //
        this.itemForm.get('Kind')?.setValue(Response.kind);
        //unit_Id
         //
         this.itemForm.get('Unit_Id')?.setValue(Response.unit_Id);
        
        this.toastr.warning("الصنف موجود"," رسالة من قاعدة البيانات",{progressBar:true});
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console

     //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    
      }

  
    );

  }
  ///===================================

  NewItem(){

    this.itemForm.reset();
  }



  //=================================

  addNewItem(){
    
    if(this.itemForm.valid)
    {
   
     console.log(this.itemForm.value);
     this.toastr.info("جارى تسجيل البيانات","يرجى الانتظار",{progressBar:true});
   
     this.itmser.AddNewItem(this.itemForm.value).subscribe(
       next => {
   
         // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
         // var appName=localStorage.getItem('grName');
         // this.rout.navigate(['userLogin',appName]);
         this.toastr.success("تم التسجيل بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
   
/////====================================

this.usrCtrl.getIPAddress().subscribe(
 
  (x: any) => {

    //this.iap=Response;
    let ctrl: IUsrCtrl = {Fact_Id:Number(localStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة أكواد الأصناف  ',Action:'إضافة ',Order:'',Order_Type:'',


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
    
    console.log(Response);
  });

//===================================


   
   
       },
       
       error => {
   
        this.toastr.error("خطأ","خطأ");
        console.log(error);
       
       
       
       }
   
   
     );
   
   
   
    }

    else this.toastr.warning("من فضلك استكمل البيانات","تنبيه")
  


  }

  //=================================7
  updateItem() {


    if (this.itemForm.valid) {

      console.log(this.itemForm.value);
      this.toastr.info("جارى تسجيل البيانات", "يرجى الانتظار", { progressBar: true });

      this.itmser.UpdItem(this.itemForm.value).subscribe(
        next => {

          // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
          // var appName=localStorage.getItem('grName');
          // this.rout.navigate(['userLogin',appName]);
          this.toastr.success("تم التسجيل بنجاح ", " رسالة من قاعدة البيانات", { progressBar: true });

          ///===============================================================================


          this.usrCtrl.getIPAddress().subscribe(
 
            (x: any) => {
          
              //this.iap=Response;
              let ctrl: IUsrCtrl = {Fact_Id:Number(localStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
          
              Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
          
              Win_Name:'شاشة أكواد الأصناف  ',Action:'تعديل ',Order:'',Order_Type:'',
          
          
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







    }

    else this.toastr.warning('يرجى اسنكمال البيانات', 'انتبه')




  }

  //====================================
  DelItem(){
    if(this.Id?.value)
    {
       
     this.itmser.DelItem(this.Id?.value).subscribe(
      next => {
  
        // this.toastr.success("نجاح"," كلمة مرور التطبيق موجودة");
        // var appName=localStorage.getItem('grName');
        // this.rout.navigate(['userLogin',appName]);
        this.toastr.success("تم الحذف بنجاح "," رسالة من قاعدة البيانات",{progressBar:true});
  
        this.usrCtrl.getIPAddress().subscribe(
 
          (x: any) => {
        
            //this.iap=Response;
            let ctrl: IUsrCtrl = {Fact_Id:Number(localStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
        
            Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
        
            Win_Name:'شاشة أكواد الأصناف  ',Action:'حذف ',Order:'',Order_Type:'',
        
        
              Ip_Address: x.ip
            };
           
            // console.log(ctrl.Order);
            this.usrCtrl.addCtrl(ctrl).subscribe(
              next => {},
              error=>{}
              
        
            );
            
            console.log(Response);
          });
  
  
      },
      
      error => {
  
       this.toastr.error("خطأ","خطأ");
      
      
      
      }
  
  
    );
  
  
    }
    else
    this.toastr.error("يجب إدخال رقم المستخدم" ,'رسالة هامة')
  
  
  
  
  
  
  }
  


  

  //================================







}
