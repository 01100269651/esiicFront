import { transition, trigger, useAnimation } from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { backInRight, backInUp, bounceInDown, fadeInDownBig, fadeInUp, lightSpeedInRight, swing, tada } from 'ng-animate';


import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { OldHistoryService } from 'src/demands/Services/old-history.service';
import { ItemService } from 'src/it-sector/Services/item.service';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';



export interface DialogData {
  
  ItemId: string ;
  
}
@Component({
  selector: 'app-old-history',
  templateUrl: './old-history.component.html',
  styleUrls: ['./old-history.component.css']
  ,animations: [
    trigger('bounce', [transition('* => *', useAnimation(lightSpeedInRight, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class OldHistoryComponent implements AfterViewInit {



  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  isLoading:boolean=true;
  fact:any;
  dataSource:any;
  itemName!:string;
  // dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  histories:Itm_Hist[]=[];

  sortedData!: Itm_Hist[];
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    

   
  
  displayedColumns: string[] =['position','hfactor_no','hstore_no','hpage_no','hline_no','htran_date','htran_cd','hcost_cd',
  'htrans_qty','htrans_val'
  // و'horder_no','horder_kind','horder_date','haccount_cd'
  ,'suppl_no','suppl_date','suppl_name'];
bounce: any;
myTiming: any;
myDelay: any;
response:any[]=[];
  

  constructor(private _liveAnnouncer: LiveAnnouncer ,
    
    private oldHistSer:OldHistoryService,

    public dialogRef: MatDialogRef<OldHistoryComponent>, 

       @Inject(MAT_DIALOG_DATA) public data: DialogData,
       
       private toastr:ToastrService ,private usrCtrl:UserContrlService,

       private itemSer:ItemService){

        console.log(this.isLoading);

// =============================================================================


  // ...
 
  // ...



// ===============================================================================



      
    this.fact=sessionStorage.getItem("fact")?.toString();

    this.sortedData = this.histories.slice();

    this.itemSer.GetItem(this.data.ItemId).subscribe(

      (xx:any)=>{

        this.itemName=xx.name;

      },

      error => {
        console.log(error); // Print the error object to the console
         }

    );
   
    
  this.oldHistSer.GetHistoryItmById(this.fact, this.data.ItemId).subscribe(
  (response:any) => {
      console.log(response);
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.data = response;
      this.dataSource.length = response.length;
      this.dataSource.paginator = this.paginator; // Connect the paginator here
      // const dataSource = new MatTableDataSource(response);
      // dataSource.paginator = this.paginator;
      // console.log(dataSource);

      // dataSource.data=response;

      this.dataSource.sort = this.sort; 
 
   
  });


//     this.oldHistSer.GetHistoryItmById(this.fact,this.data.ItemId).subscribe(
 
//       (Response: any) => {
  
//         //this.iap=Response;
        

//         this.histories= Response;

//         this.Response=Response;

        
//        // this.dataSource = new MatTableDataSource<Itm_Hist>(this.histories);
//         // this.dataSource.data=this.histories;

//         //=========================
//         this.dataSource = new MatTableDataSource(Response);
//         this.dataSource.data=Response;
//         this.dataSource.length=Response.length;
      
// // Assign the paginator *after* dataSource is set
// this.dataSource.paginator = this.paginator;
// // this.dataSource.sort = this.sort;

//         //================
//          this.dataSource.paginator = this.paginator;
       
//         // console.log(this.dataSource);
//         this.isLoading=false;
//       },
//           error => {
//           console.log(error); // Print the error object to the console
       
  
    
    
//       }
  
  
//     );


//===============================================

    this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة الاستعلام عن البيانات التريخية ',Action:'open window',Order:this.data.ItemId,Order_Type:'',
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
       // console.log(Response);
      });
   //=========================================================


  }

 
  ngAfterViewInit() {

    // dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    //this.dataSource.paginator = this.paginator;
   
  }
}
export interface Itm_Hist {
  hfactor_no: string;
  hstore_no: number;
  hpage_no: number;
  hline_no: string;
  hitem_no: string;
  htran_date :Date;
  htran_cd :string ;
  hcost_cd : string ;
  htrans_qty :string ;
  htrans_val :string;
  horder_no :string ;
  horder_kind :string ;
  horder_date :Date;
  haccount_cd :string ;
  cunter :string ;
  flag_t :string ;
  hcar_no:string ;
  hcar_date:Date;
  suppl_kind:string;
  suppl_no:string;
  suppl_date:Date;
  suppl_name:string;
  gover_code:string;









}