import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/it-sector/Services/master.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { StoreDetailsComponent } from '../store-details/store-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DataSource } from '@angular/cdk/collections';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';

@Component({
  selector: 'app-sum-stores',
  templateUrl: './sum-stores.component.html',
  styleUrls: ['./sum-stores.component.css']
})
export class SumStoresComponent  {
  dataSource: any;
applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  totalForm!:FormGroup;
  isLoading!:boolean;
  Fact: any=sessionStorage.getItem('fact');

  selectedFactId:any;

  facts: any[] = [];
  public list_product = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) private paginator: MatPaginator | undefined;  // <-- STEP (3)


  storesSums:any[]=[];
  
  displayedColumns: string[] 
  =['position','fact_Id','fact_Name',
    'store_Id','store_Name','frstQtyTotal'
    ,'frstValTotal','inQtyTotal',
    'inValTotal','eInQtyTotal','eInValTotal'
    ,'outQtyTotal','outValTotal',
    'eOutQtyTotal','EOutValTotal',
    'finQty','FinVal'];


  constructor(private toastr:ToastrService,
    public dialog: MatDialog,
    private masterItems:MasterService, 
    private scmFactSer:SCMFactService ,private fb:FormBuilder,
    private entertotab:EnterToTabService,
    private snackBar:MatSnackBar){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    this.totalForm=this.fb.group({
      Fact_Id: [Number(sessionStorage.getItem('fact')),Validators.required]}
    );

    this.scmFactSer.getAllFact().subscribe(
      (x:any)=>{
        this.facts=x;
      }
    );
    // this.dataSource.paginator = this.paginator; 




  }
  get Fact_Id(){return this.totalForm.get('Fact_Id');}
  ngAfterViewInit(): void {
    // this.list_product.paginator = this.paginator;  // <-- STEP (4)
}

getTot()
{
  this.isLoading=true;
  this.masterItems.getTotalSumes(this.Fact_Id?.value).subscribe(
    (x:any)=>{

    
      console.log(x);

      this.storesSums=x;
      this.list_product.data = x;

      this.dataSource = new MatTableDataSource(x);
      this.dataSource.data = x;
      this.dataSource.length = x.length;
      this.dataSource.paginator = this.paginator; // Connect the paginator here
      const dataSource = new MatTableDataSource(x);
     
      console.log(dataSource);
      this.isLoading=false;
      dataSource.data=x;








    },
    error=>{
      this.isLoading=true;
      this.snackBar.open('حدث خطأ من جانب الشبكة أو الخادم');

    }
  );


}
asd(x:any){

  const dialogRef = this.dialog.open(StoreDetailsComponent, {

    data: {Fact: x.fact_Id, Seson: '', Type:x.store_Id,Id:1},
  });
  
}
tellMe(){
  this.toastr.info("اضغط مرتين علي المخزن لعرض الأرصدة التفصيلية");
}

}
