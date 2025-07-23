import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StoresService } from 'src/it-sector/Services/stores.service';

@Component({
  selector: 'app-inqr-stroes',
  templateUrl: './inqr-stroes.component.html',
  styleUrls: ['./inqr-stroes.component.css']
})
export class InqrStroesComponent {

  displayedColumns: string[] =['position','fact_Name','store_Id',
    'store_Name','kind_Code','local_Code','store_Code'];

  
  dataSource: any;
  
  applyFilter(event: KeyboardEvent) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  @ViewChild (MatPaginator) paginator!: MatPaginator;
    
  constructor(private storSer:StoresService){


    this.storSer.GetSoreAllFactId().subscribe(
      (response:any)=>{

        console.log(response);

        this.dataSource = new MatTableDataSource(response);
        this.dataSource.data = response;
        this.dataSource.length = response.length;
        this.dataSource.paginator = this.paginator; // Connect the paginator here
        const dataSource = new MatTableDataSource(response);
        dataSource.paginator = this.paginator;
        // console.log(dataSource);
        // this.isLoading=false;
        dataSource.data=response;

      },
      error=>{}

    );

  }

}
