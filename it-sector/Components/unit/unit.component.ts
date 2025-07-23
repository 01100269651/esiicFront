import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { SCMUnitService } from 'src/it-sector/Services/scm-unit.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {

  factForm!:FormGroup;

  displayedColumns: string[] =['position','id','name']
    isLoading:boolean=false;
    dataSource:any;
    @ViewChild (MatPaginator) paginator!: MatPaginator;

    
  constructor(private fb:FormBuilder,private usr:UserContrlService 
    ,private toastr: ToastrService, private au:SCMUnitService ,   private entertotab:EnterToTabService
    ,private usrCtrl:UserContrlService){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.factForm = this.fb.group({

      Id :['',Validators.required],
        
      Name:['',Validators.required],

      Image:[' ']
    
    });
       /////////////////////////////////////
   this.usrCtrl.getIPAddress().subscribe(
 
    (x: any) => {
  
      //this.iap=Response;
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
  
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة أكواد المصانع ',Action:'open window',Order:'',Order_Type:'',
  
  
        Ip_Address: x.ip
      };
     
      // console.log(ctrl.Order);
      this.usrCtrl.addCtrl(ctrl).subscribe(
        next => {},
        error=>{}
        
  
      );
      
      console.log(Response);
    });
/////////////////////////////////////
 
this.au.getAll().subscribe(
  (response:any)=>{
    this.isLoading=false;
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.data = response;
    this.dataSource.length = response.length;
    this.dataSource.paginator = this.paginator; // Connect the paginator here
    const dataSource = new MatTableDataSource(response);
    dataSource.paginator = this.paginator;
    console.log(dataSource);
    //this.isLoading=false;
    dataSource.data=response;


  },
  error=>{

  }
);

////////////////
      

  }
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get Id()
  {return this.factForm.get('Id');}


  ////========================================================================================================================


  get Name()
  {return this.factForm.get('Name');}

  GetUnitById(){



    this.au.getByID(this.Id?.value).subscribe(
 
      (Response: any) => {
  
        //this.iap=Response;
        
        console.log(Response);
        

        
        this.factForm.get('Name')?.setValue(Response.name);
        
        this.toastr.warning("المستخدم موجود"," رسالة من قاعدة البيانات",{progressBar:true});
  
      },
      
      error => {
  
        console.log(error); // Print the error object to the console

     //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
    
      }

  
    );
  

  }
  ////========================================================================================================================
  newUnit(){

  }

  //==================================================================================
createUnit(){


}
//=========================================
updateUnit(){

}
//====================================================

delUnit(){}

  
}

