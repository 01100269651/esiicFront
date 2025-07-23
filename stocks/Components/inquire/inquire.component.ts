import { Component, OnInit } from '@angular/core';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';
import {MatTableModule} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShSpinnerComponent } from 'src/shared/Components/sh-spinner/sh-spinner.component';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';


@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.css']
})

export class InquireComponent implements OnInit {
  dataSource: any;
applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
displayedColumns: string[] = ['fact_Name' ,'store_Id',
  'store_Name','tran_Date','Page','Ser','Cost_ID',
  'item_Name','Quantity','Exe_Rec_No','Exe_Rec_Date'];
  
  @ViewChild(MatPaginator) paginator!:MatPaginator ;

  @ViewChild(MatSort) sort!: MatSort;

  tranactions:any[]=[];
  isLoading!:boolean;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

constructor( private StksTransServ:InSTOKService, private usrCtrl:UserContrlService ,   private entertotab:EnterToTabService){
 
///////////////////////////////////////////////////========================      
entertotab.handleEnterKey();
///////////////////////////////////////////////////========================

 
  let ff= sessionStorage.getItem("fact");
  this.isLoading=true;
  this.StksTransServ.GetAll(ff).subscribe(

    (Response: any) => {

      console.log(Response);
      
      this.tranactions=Response;
      this.dataSource = new MatTableDataSource(Response);
      this.dataSource.data = Response;
      this.dataSource.length = Response.length;


      try{
       // if (this.paginator && this.dataSource) {
         this.dataSource.paginator = this.paginator;
       
      }
      catch{
       alert("alert setting paginator")
      }
      //DataSource=Response;

      this.isLoading=false;
    },
    
    error => {

      console.log(error); // Print the error object to the console

   //  this.toastr.info("تطبيق  جديد","يمكن تسجيل بيان جديد ");
  
    }


  );
 


  /////////////////////////////////////
  


        ///////////////////
        this.usrCtrl.getIPAddress().subscribe(
 
          (x: any) => {
        
            //this.iap=Response;
            let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
        
            Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
        
            Win_Name:'شاشة الاستعلامات عن البيانات المسجلة ',Action:'عرض ',Order:'',Order_Type:'',
        
        
              Ip_Address: x.ip
            };
           
            // console.log(ctrl.Order);
            this.usrCtrl.addCtrl(ctrl).subscribe(
              next => {},
              error=>{}
              
        
            );
            
            console.log(Response);
          });
      
      
        /////////////////////////////

  
//=====================================================
}
  ngOnInit(): void {
    
  
    
  }
  asd(x:any,y:any){
    alert(x);
    alert(y);
  }
 
}
