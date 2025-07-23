import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { DialogData } from 'src/demands/Components/old-history/old-history.component';


import { UserContrlService } from 'src/shared/Services/user-contrl.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent {
  dataSource: any;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild (MatPaginator) paginator!: MatPaginator;
    

Trans:any[]=[];

isLoading:boolean=true;

displayedColumns: string[] =['position','fact_Id','scM_FactName','user_Id','scM_Login_User_Name','dept_Id','app_Name'
,'win_Name','action','tran_Date','order','iP_Address']
  constructor(public dialogRef: MatDialogRef<UserControlComponent>,    private entertotab:EnterToTabService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private usrCtrl:UserContrlService){


      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.usrCtrl.getUserInfo(this.data.ItemId).subscribe(
      (x:any)=>{
      this.Trans=x;
      console.log(x);


      this.dataSource = new MatTableDataSource(x);
      this.dataSource.data = x;
      this.dataSource.length = x.length;
      this.dataSource.paginator = this.paginator; // Connect the paginator here
      const dataSource = new MatTableDataSource(x);
      dataSource.paginator = this.paginator;
      console.log(dataSource);
    
      dataSource.data=x;
      this.isLoading=false;

    
    },
      error=>{ }
    );

  }




}
