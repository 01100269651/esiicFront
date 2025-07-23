import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Dialog3Data } from '../order-buy/order-buy.component';
import { MasterService } from 'src/it-sector/Services/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { id } from '@swimlane/ngx-datatable';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';

@Component({
  selector: 'app-itm-mstr',
  templateUrl: './itm-mstr.component.html',
  styleUrls: ['./itm-mstr.component.css']
})
export class ItmMstrComponent {


 dataSource:any;

 @ViewChild (MatPaginator) paginator!: MatPaginator;
  
  displayedColumns: string[] 
  =['position','fact_Id','first_Qty',
    'store_Id','store_Name','first_Val','fact_Name',

   'in_Qty','in_Val',
    // 'frstQtyTotal'
    // ,'frstValTotal'
    'out_Qty',
    'out_Val',
    'eIn_Qty','eIn_Val'
    ,'eOut_Qty','eOut_Val',
    'last_In_Date','last_In_No',
    'last_Out_Date','last_Out_No',
    'net_Qty' ,'net_Val'


  ];
    isLoading!:boolean;

    constructor(
      public dialogRef: MatDialogRef<ItmMstrComponent> ,   private entertotab:EnterToTabService,
      
      @Inject(MAT_DIALOG_DATA) public data: Dialog3Data,

private itmMstr:MasterService
    ){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
      
      this.itmMstr.getByItmId(data.Id).subscribe(
        (response:any)=>

        {
          this.isLoading=false;
          this.dataSource = new MatTableDataSource(response);
          this.dataSource.data = response;
          this.dataSource.length = response.length;
          this.dataSource.paginator = this.paginator; // Connect the paginator here
          const dataSource = new MatTableDataSource(response);
          dataSource.paginator = this.paginator;
          console.log(dataSource);
         
          dataSource.data=response;
  
},
        
        error=>{

        }

      );



    }

  //======================================
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
