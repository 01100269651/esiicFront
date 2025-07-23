import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { MasterService } from 'src/it-sector/Services/master.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';







@Component({
  selector: 'app-updmstr',
  templateUrl: './updmstr.component.html',
  styleUrls: ['./updmstr.component.css']
})
export class UPDMstrComponent {
  dataSource!:any;

  fact:any;
  displayedColumns: string[] = ['Fact_Name' ,'Store_Id','Store_Name',
    'Tran_Date','Page','Ser','Cost_ID','Item_Name','Quantity','Exe_Rec_No','Exe_Rec_Date'];
  tranactions:any[]=[];
  isLoading!:boolean;

  facts:any[]=[];
  updForm:FormGroup;
constructor( private scmFactSer:SCMFactService,private fb:FormBuilder ,private mastSer:MasterService,
  private toasts:ToastrService ,
  private entertotab:EnterToTabService
  ,private tranSer:InSTOKService
){

  
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
  ///================================
  this.updForm = this.fb.group({

    Fact_Id: ['',Validators.required],

    FTran_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

    ETran_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required]

  
  });


        //=====================================
        this.scmFactSer.getAllFact().subscribe(
          (Response: any) => {
            this.facts=Response;
          },
                  error => {
       
          }
    
      
        );
        ////////////////////////////////////////////////////////////
}
 
get Fact_Id(){return this.updForm.get('Fact_Id');}
  
get FTran_Date(){return this.updForm.get('FTran_Date');}

get ETran_Date(){return this.updForm.get('ETran_Date');}

//=====================================================================

@ViewChild(MatPaginator, {static: false})
paginator!: MatPaginator;

ngAfterViewInit() {
  
}


//==========================================================================================

getTransNotUpd(event:any){
  this.isLoading=true;
  
  this.tranSer.GetAll(event.value).subscribe(
    (response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.data = response;
      this.dataSource.length = response.length;
      this.dataSource.paginator = this.paginator; // Connect the paginator here
      const dataSource = new MatTableDataSource(response);
      dataSource.paginator = this.paginator;
      console.log(dataSource);
      this.isLoading=false;
      dataSource.data=response;
    },
    error => {
      // console.log(error);
      this.isLoading = false;
    }
  );



 
}

//===========================================================================================

UpdMaster(){

  if(this.updForm.valid)
{
  this.isLoading=true;
  console.log(this.updForm?.value);

  if(!this.scmFactSer.checkFactNo(this.Fact_Id?.value))
   
    
    {
      alert("المصنع ليس من اختصاصك")
      
      return;

    }

this.mastSer.UpdateMaster(this.Fact_Id?.value,this.FTran_Date?.value,this.ETran_Date?.value).subscribe(
  
  (x:any)=>{

    this.toasts.success("تم الترحيل")

  },

  error=>{

    this.toasts.error(" لم يتم الترحيل")

  }
);

this.isLoading= false;

}
else this.toasts.error("البيانات غير مكتملة");


}
applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}