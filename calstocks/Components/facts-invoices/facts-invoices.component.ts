import { transition, trigger, useAnimation } from '@angular/animations';
import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { bounce, rollIn } from 'ng-animate';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { FAccountMService } from 'src/it-sector/Services/f-account-m.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';

@Component({
  selector: 'app-facts-invoices',
  templateUrl: './facts-invoices.component.html',
  styleUrls: ['./facts-invoices.component.css'], animations: [
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))])

    ,
    trigger('bounce', [transition('* => *', useAnimation(bounce, {   params: { timing: 5 }    }))])
  ],
})
export class FactsInvoicesComponent {
  dataSource:any;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  totalForm!:FormGroup;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  

  Invoices:any[]=[];
  displayedColumns: string[] 
  =['position','fact_Id','fact_Name',

    'item_Id','item_Name',
    'tran_Date',
   
    'qty','val',
    'send_No','send_Date','car'
    ];

  isLoading!:boolean;
  
  facts: any[] = [];
  accountName!: string;
bounce: any;
myTiming: any;
myDelay: any=1000;
  constructor(private fb:FormBuilder, private scmFactSer:SCMFactService ,
    private  accServ:FAccountMService ,
    private toastr: ToastrService ,private entertotab:EnterToTabService,
    private inServ:InSTOKService ){


      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.scmFactSer.getAllFact().subscribe(
      (x:any)=>{
        this.facts=x;
      }
    );

  this.totalForm = this.fb.group({

    Fact_Id: [Number(sessionStorage.getItem('fact')),Validators.required],

    fTran_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

    eTran_Date: [formatDate(new Date().toISOString().substring(0, 10), 'yyyy-MM-dd', 'en-US'),Validators.required],

    ACC_NO: [ '1', Validators.required]
  });


}

get Fact_Id(){return this.totalForm.get('Fact_Id');}
  
get fTran_Date(){return this.totalForm.get('fTran_Date');}

get eTran_Date(){return this.totalForm.get('eTran_Date');}

get ACC_NO(){return this.totalForm.get('ACC_NO');}

getAccName(){
  this.accServ.GetAccountById(this.ACC_NO?.value).subscribe(
    (Response: any) => {
  
      console.log(Response);
        
        this.accountName=Response.acc_Name;
      },
        
      error => {
  
        this.toastr.warning("رقم الحساب غير صحيح");
    
    
      }
    
  
  );
  
  }
getInvoices() {

  this.inServ.getInvoces(this.ACC_NO?.value,this.fTran_Date?.value,this.eTran_Date?.value).subscribe(
    (response:any)=>{
      // console.log(x);
      // this.Invoices=x;
      this.myDelay=1;

      this.dataSource = new MatTableDataSource(response);
      this.dataSource.data = response;
      this.dataSource.length = response.length;
      this.dataSource.paginator = this.paginator; // Connect the paginator here
      const dataSource = new MatTableDataSource(response);
      dataSource.paginator = this.paginator;
      console.log(dataSource);
      this.isLoading=false;
      dataSource.data=response;

    }
    ,error=>{

      this.toastr.error("حدث خطأ غير متوقع");
    }
  );

  }
}
