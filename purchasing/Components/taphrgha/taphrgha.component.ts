import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { DialogData } from 'src/demands/Components/diag/diag.component';
import { OrdItmService } from 'src/demands/Services/ord-itm.service';

@Component({
  selector: 'app-taphrgha',
  templateUrl: './taphrgha.component.html',
  styleUrls: ['./taphrgha.component.css']
})
export class TaphrghaComponent {
isLoading: any;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  dataSource: any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] =['position',
    'Fnl_Id',
    'Item_No','Item_Name','Quantity',
    'Unit' ,'Price_Unit1','Total1',
  'Price_Unit2','Total2','Price_Unit3','Total3','Price_Unit4','Total4'];

    constructor( private ordItms:OrdItmService,   private entertotab:EnterToTabService,
    
      public dialogRef: MatDialogRef<TaphrghaComponent>, 
  
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      
      private toastr:ToastrService){
  
        
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
  
      //  this.currentDateTime = new Date().toLocaleString();
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
         // this.fact=Response[0].fact_Name;
        
          // console.log(dataSource);
          // this.isLoading=false;
          dataSource.data=Response;
        },
        error=>{}
  
      );
  
    }

}
