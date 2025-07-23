import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { StoresService } from 'src/it-sector/Services/stores.service';

@Component({
  selector: 'app-stores-inqr',
  templateUrl: './stores-inqr.component.html',
  styleUrls: ['./stores-inqr.component.css']
})
export class StoresInqrComponent {
  displayedColumns: string[] =['position','fact_Id','id','name',
    'kind_Code','local_Code'
    ,'store_Code'
  
    ]

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isLoading:boolean=false;
  dataSource:any;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private storsServ:StoresService,   private entertotab:EnterToTabService){
    this.storsServ.GetAllStore().subscribe(
      (response:any)=>{

        this.isLoading=false;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.data = response;
      this.dataSource.length = response.length;
      this.dataSource.paginator = this.paginator; // Connect the paginator here
      const dataSource = new MatTableDataSource(response);
      dataSource.paginator = this.paginator;
      console.log(dataSource);
      //this.isLoading=false;
      dataSource.data=response;

      },
      error=>{

      }
    );


  }

}
