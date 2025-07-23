import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { lightSpeedInRight } from 'ng-animate';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/demands/Components/diag/diag.component';
import { ItemService } from 'src/it-sector/Services/item.service';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { ItmMstrComponent } from '../itm-mstr/itm-mstr.component';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';

@Component({
  selector: 'app-inqr-itm-no-or-name',
  templateUrl: './inqr-itm-no-or-name.component.html',
  styleUrls: ['./inqr-itm-no-or-name.component.css']
  ,animations: [
    trigger('bounce', [transition('* => *', useAnimation(lightSpeedInRight, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class InqrItmNoOrNameComponent {
  dataSource:any;
  displayedColumns: string[] =['position','id','name','Unit',
    'Kind','Etab'
    ,'Group','Fnl_Date',
    'Eng_No','Eng_Name'
  
    ]


@ViewChild (MatPaginator) paginator!: MatPaginator;
isLoading: boolean=false;
//=================================
constructor( public dialog: MatDialog ,   private entertotab:EnterToTabService,

public dialogRef: MatDialogRef<InqrItmNoOrNameComponent>, 

@Inject(MAT_DIALOG_DATA) public data: DialogData,

private toastr:ToastrService ,private usrCtrl:UserContrlService,

private itemSer:ItemService){


      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
  
this.isLoading=true;
  this.itemSer.getSearchResults(this.data.Type,this.data.Id).subscribe(
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
    }
    ,
    error=>{
      this.isLoading=false;

    }
  );

}
//===============================================



applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

//===============================================================================

findMstr(itm:any){

  
  const dialogRef = this.dialog.open(ItmMstrComponent, {

    data: {Fact: null, Seson: null,

      Type:null,Id:itm},
  });



  
}
  

}
