import { Component } from '@angular/core';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';

@Component({
  selector: 'app-dmsidebar',
  templateUrl: './dmsidebar.component.html',
  styleUrls: ['./dmsidebar.component.css']
})
export class DmsidebarComponent {
  displayedColumns: string[] = ['main_Dept','ord_Date','ord_Id' ];
  
  itms:any[]=[];
  fact:any="";
  isMenuOpen: boolean = true;

  constructor(private ordSer:OrdMstrService  ){

    this.fact=sessionStorage.getItem("fact");

    this.ordSer.GetOrdByFact(this.fact,sessionStorage.getItem('FinYear')).subscribe(
 
      (Response: any) => {
          //this.iap=Response;
       this.itms= Response;      },
           error => {        console.log(error); }         // Print the error object to the console
    );


  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
