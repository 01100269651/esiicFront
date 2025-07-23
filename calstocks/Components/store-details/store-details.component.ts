import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { MasterService } from 'src/it-sector/Services/master.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { Dialog3Data } from 'src/shared/Components/order-buy/order-buy.component';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent {

  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  
  displayedColumns: string[] 
  =['position','fact_Id','fact_Name',
    'store_Id','store_Name',
    'item_Id','item_Name',
    'frstQtyTotal'
    ,'frstValTotal','inQtyTotal',
    'inValTotal','eInQtyTotal','eInValTotal'
    ,'outQtyTotal','outValTotal',
    'eOutQtyTotal','EOutValTotal',
    'finQty','FinVal'];
    isLoading!:boolean;
  constructor(public dialogRef: MatDialogRef<StoreDetailsComponent> , 
    private entertotab:EnterToTabService,
    @Inject(MAT_DIALOG_DATA) public data: Dialog3Data,
  private masterItems:MasterService, 
    private scmFactSer:SCMFactService 

)
  {
    

      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.isLoading=true;
    
    this.masterItems.getDetailsBalances(this.data.Fact,this.data.Type).subscribe(
      (response:any)=>{
  
        this.isLoading=false;

        this.dataSource = new MatTableDataSource(response);

        this.dataSource.data = response;

        this.dataSource.length = response.length;

        this.dataSource.paginator = this.paginator; // Connect the paginator here

        const dataSource = new MatTableDataSource(response);

        dataSource.paginator = this.paginator;

        console.log(response);

        //this.isLoading=false;

        dataSource.data=response;

        
  
  
  
  
      },
      error=>{
        this.isLoading=true;
        //this.snackBar.open('حدث خطأ من جانب الشبكة أو الخادم');
  
      }
    );




  }

  //=======================
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }







}
