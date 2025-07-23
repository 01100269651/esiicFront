import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from 'src/it-sector/Services/item.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';
import { error } from 'jquery';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';


@Component({
  selector: 'app-item-balance',
  templateUrl: './item-balance.component.html',
  styleUrls: ['./item-balance.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class ItemBalanceComponent implements AfterViewInit {
  displayedColumns: string[] = ['fact_Name' ,'item_Name','quantity_Master','quantity_Trans'];
  
  dataSource:any;
  balanceForm!: FormGroup;
  facts: any[] = [];
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    isLoading:boolean=false;
    fact:any;
 
  
  Balances:any[]=[];

  @ViewChild (MatPaginator) paginator!: MatPaginator;
    
  constructor(private fb: FormBuilder,   private entertotab:EnterToTabService,

    private _snackBar: MatSnackBar,

    private scmFactSer: SCMFactService,

    private toastr: ToastrService    ,
    
    private ItemSer:ItemService , private transSer:InSTOKService 
 ) {
    ///===========================================

      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////

    //=====================================
    this.scmFactSer.getAllFact().subscribe(
      (Response: any) => {
        this.facts = Response;

      },
      error => {

      }


    );
    ////////////////////////////////////////////////////////////
    this.balanceForm = this.fb.group({

      Fact_Id: [Number(sessionStorage.getItem('fact')), Validators.required],

      Itm_Id: ['',
        [Validators.maxLength(9),Validators.minLength(9), Validators.required]]
      
      })  }
  get Fact_Id(){return this.balanceForm.get('Fact_Id');}

  get Itm_Id(){return this.balanceForm.get('Itm_Id');}
    
//========================================================================
//======================================================================
getItmName(){
  

  this.ItemSer.GetItem(this.Itm_Id?.value).subscribe(
    (Response: any) => {
    //  console.log(Response);
    this._snackBar.open( Response.name, 'موافق', {
      panelClass: ['custom-snackbar-background']} );
     
     // this.itemUnitName = Response.scM_Unit.name;

       
    },
      error => {
        this._snackBar.open( "اسم الصنف غير مسجل","موافق");
      }


);

 
}




//=================================================================================================================
asd(x:any,y:any){}
//=======================================================
showBalance(){
  // this.toastr.show("good");
  this.isLoading=true;
  console.log(this.Itm_Id?.value);
  this.transSer.getItmBal(this.Itm_Id?.value).subscribe(
    (response:any)=>{

      this.dataSource = new MatTableDataSource(response);
      this.dataSource.data = response;
      this.dataSource.length = response.length;
      this.dataSource.paginator = this.paginator; // Connect the paginator here
      const dataSource = new MatTableDataSource(response);
      dataSource.paginator = this.paginator;
      console.log(dataSource);
      this.isLoading=false;
      dataSource.data=response;

    },
    error=>{
      this.isLoading = true;
    }
  );
  
}

//=====================================
ngAfterViewInit() {

  // dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  this.dataSource.paginator = this.paginator;
 
}

}

