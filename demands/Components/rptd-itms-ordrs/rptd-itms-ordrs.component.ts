import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrdItmService } from 'src/demands/Services/ord-itm.service';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';
import { Dialog3Data, OrderBuyComponent } from 'src/shared/Components/order-buy/order-buy.component';

@Component({
  selector: 'app-rptd-itms-ordrs',
  templateUrl: './rptd-itms-ordrs.component.html',
  styleUrls: ['./rptd-itms-ordrs.component.css']
})
export class RptdItmsOrdrsComponent {
  displayedColumns: string[] =[
    'position'
    ,'fact_Name'
    ,'season'
    ,'ord_No'
    ,'type_Name'
    
    
    ,'dept_Name'
    ,'cause'
  
  
  ]

  isLoading!:boolean;
  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

  //  this.dataSource.
  }

  constructor(   public dialog: MatDialog ,
    public dialogRef: MatDialogRef<RptdItmsOrdrsComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: Dialog3Data
    ,private  itmsOrdrdSer:OrdMstrService){
      this.isLoading=true;
    this.itmsOrdrdSer.getRepeatedOrdrs(data.Fact,data.Seson,data.Id ).subscribe(

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
        
      }
    );

  }

  //====================================================================

  openDialog2(fact:any,Season:any,Type:any,Ord_Id:any): void{

  


    const dialogRef = this.dialog.open(OrderBuyComponent, {

      data: {Fact: fact, Seson: Season, Type:Type,Id:Ord_Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });



  }


  //===================================================

}
