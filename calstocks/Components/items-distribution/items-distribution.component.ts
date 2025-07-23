import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';

@Component({
  selector: 'app-items-distribution',
  templateUrl: './items-distribution.component.html',
  styleUrls: ['./items-distribution.component.css']
})
export class ItemsDistributionComponent {
  dataSource:any;
  totalForm!:FormGroup;

  distributedItms:any[]=[];
  displayedColumns: string[] 
  =['position','fact_Id','fact_Name',
    'store_Id','store_Name','acc',
    'item_Id','item_Name',
    'cost_Name','acc_Name',
    'qty','val'
    ];
    @ViewChild (MatPaginator) paginator!: MatPaginator;
    

  isLoading!:boolean;
  
  facts: any[] = [];
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private fb:FormBuilder, private scmFactSer:SCMFactService ,
    private entertotab:EnterToTabService,
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

    Tran_Code: [ '1', Validators.required]
  });


}



get Fact_Id(){return this.totalForm.get('Fact_Id');}
  
get fTran_Date(){return this.totalForm.get('fTran_Date');}

get eTran_Date(){return this.totalForm.get('eTran_Date');}

get Tran_Code(){return this.totalForm.get('Tran_Code');}

getTot(){

  this.isLoading=true;
  this.inServ.getItemsDistributed(this.Fact_Id?.value,this.Tran_Code?.value,this.fTran_Date?.value,this.eTran_Date?.value).subscribe(
    (response:any)=>{
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
    error=>{


    }

  );

  

}
}