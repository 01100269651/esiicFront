import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { OrdItmService } from 'src/demands/Services/ord-itm.service';

import { MatDialog } from '@angular/material/dialog';
import { RptdItmsOrdrsComponent } from '../rptd-itms-ordrs/rptd-itms-ordrs.component';

@Component({
  selector: 'app-reapted-in-fact',
  templateUrl: './reapted-in-fact.component.html',
  styleUrls: ['./reapted-in-fact.component.css']
})
export class ReaptedInFactComponent {

  displayedColumns: string[] =[
    'position'
    ,'fact_Name'
    ,'season'
    ,'type_Name'
    ,'item_No'
    ,'item_Name'
    ,'itemCount'
    ,'itemTot'
  
  
  ]
  isLoading!:boolean;
  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

  //  this.dataSource.
  }

  constructor( private toastr: ToastrService ,
     private ordItmsSer: OrdItmService ,
     public dialog: MatDialog
    ){
      this.isLoading=true;
      this.ordItmsSer.getRepeatedInFact().subscribe(
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

  //================================================================

  openOrdrs(
     fact:any,Season:any,Ord_Id:any , ItmName:any
  ){

  
    

    const dialogRef = this.dialog.open(RptdItmsOrdrsComponent
      , {

       data: {Fact: fact, Seson: Season, Id:Ord_Id, Type:ItmName},
    }
  );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });



  }




}
