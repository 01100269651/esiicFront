import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData } from 'src/demands/Components/diag/diag.component';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';



interface DataTablesResponse {
  recordsTotal: number;
  recordsFiltered: number;
  data: any[]; // Assuming the data property is an array of any type
}

@Component({
  selector: 'app-order-log',
  templateUrl: './order-log.component.html',
  styleUrls: ['./order-log.component.css']
})
export class OrderLogComponent {
  isLoading:boolean=false;

  displayedColumns: string[] = ['fact_Id','scM_FactName','user_Id','scM_Login_User_Name','app_Name'
  ,'win_Name','tran_Date','action','order','iP_Address'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
   try{ this.dataSource.paginator = this.paginator;}
   catch{}
  }
  constructor(private usrCtrl:UserContrlService, @Inject(MAT_DIALOG_DATA) public data: DialogData){
    this.isLoading=true;
    this.usrCtrl.getOrderLog(this.data.Type,this.data.Id).subscribe(
 
      (response: any) => {
  
        //this.iap=Response;
        console.log(Response);
        
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.data = response;
        this.dataSource.length = response.length;
        this.dataSource.paginator = this.paginator; // Connect the paginator here
        const dataSource = new MatTableDataSource(response);
        dataSource.paginator = this.paginator;
        console.log(dataSource);
        this.isLoading=false;
        dataSource.data=response;
        this.isLoading=false;

      },
          error => {
          console.log(error); // Print the error object to the console
       
  
    
    
      }
  
  
    );

  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

///======================================================================

export interface PeriodicElement {
  Fact_Id: any;
  Tran_Date: any;
  
}

//========================================================================================
export interface UsrControlLog {
  Fact_Id: any;
  Tran_Date: any;
 
}

//=========================================
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];