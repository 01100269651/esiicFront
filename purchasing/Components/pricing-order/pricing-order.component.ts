import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { DialogData } from 'src/demands/Components/diag/diag.component';
import { OrdItmService } from 'src/demands/Services/ord-itm.service';

@Component({
  selector: 'app-pricing-order',
  templateUrl: './pricing-order.component.html',
  styleUrls: ['./pricing-order.component.css']
})
export class PricingOrderComponent {
  dataSource: any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  fact:any;
    
  displayedColumns: string[] =['position',
    'Fnl_Id',
    'Item_No','Item_Name','Quantity',
    'Unit' ,'Price_Unit','Total','Notes'];
  currentDateTime: string;
isLoading: any;

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor( private ordItms:OrdItmService,   private entertotab:EnterToTabService,
    
    public dialogRef: MatDialogRef<PricingOrderComponent>, 

    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    
    private toastr:ToastrService){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////


      this.currentDateTime = new Date().toLocaleString();
this.isLoading=true;
this.ordItms.getPricingOfferItms().subscribe(
  (Response:any)=>

      {
        this.isLoading=false;

        this.dataSource = new MatTableDataSource(Response);
        this.dataSource.data = Response;
        this.dataSource.length = Response.length;
        this.dataSource.paginator = this.paginator; // Connect the paginator here
        const dataSource = new MatTableDataSource(Response);
        dataSource.paginator = this.paginator;
        this.fact=Response[0].fact_Name;
      
        // console.log(dataSource);
        // this.isLoading=false;
        dataSource.data=Response;
      },
      error=>{}

    );

  }


}
