import { Component } from '@angular/core';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';

@Component({
  selector: 'app-dmsidebar',
  templateUrl: './dmsidebar.component.html',
  styleUrls: ['./dmsidebar.component.css']
})
export class DmsidebarComponent {
  displayedColumns: string[] = ['main_Dept','ord_Date','ord_Id' ];
  // ,'Store_Id','scM_Store.name','Tran_Date','Page','Ser','Cost_ID','scM_Item.name','Quantity','Exe_Rec_No','Exe_Rec_Date'];

  itms:any[]=[];
  fact:any="";
  constructor(private ordSer:OrdMstrService  ){

    this.fact=sessionStorage.getItem("fact");

    this.ordSer.GetOrdByFact(this.fact,sessionStorage.getItem('FinYear')).subscribe(
 
      (Response: any) => {
          //this.iap=Response;
       this.itms= Response;      },
          error => {        console.log(error); }         // Print the error object to the console
    );


  }

}
