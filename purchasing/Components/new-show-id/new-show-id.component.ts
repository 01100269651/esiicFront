import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrdItmService } from 'src/demands/Services/ord-itm.service';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';
import { ItemService } from 'src/it-sector/Services/item.service';
import { PricingOrderComponent } from '../pricing-order/pricing-order.component';
import { MatDialog } from '@angular/material/dialog';
import { TaphrghaComponent } from '../taphrgha/taphrgha.component';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';

@Component({
  selector: 'app-new-show-id',
  templateUrl: './new-show-id.component.html',
  styleUrls: ['./new-show-id.component.css']
})
export class NewShowIdComponent {

  constructor( public dialog: MatDialog,   private entertotab:EnterToTabService,
    private oItmSer:OrdItmService,private toastr:ToastrService){

      
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
  }




  getMaxShowId(){

    var f=sessionStorage.getItem('fact');

    var ses =sessionStorage.getItem('FinYear')

    this.oItmSer.getMaxShowId(f,ses,1).subscribe(

      (Response: any) => {
        sessionStorage.setItem('showId',Response);
       
    
        this.toastr.show("رقم العرض الجديد",Response)

        
        
        // this.toastr.show(this.storeKind);
    
      },
        
      error => {
    
       
    
      }
    
    
    );

  }

  getCurrentShowId(){



    const showId = sessionStorage.getItem('showId');
    if (showId !== null) {
        this.toastr.show('Current Show ID:', showId);
    } else {
        this.toastr.show('No show ID available.');
    }

  

  

  }
  //=========================================================================
  printCurrentShow(){
    const dialogRef = this.dialog.open(PricingOrderComponent, {
        
      data: {ShowId: 7},
    });

  }
  //=============================================
  printCurrentTafrgha()
  {
    const dialogRef = this.dialog.open(TaphrghaComponent, {
        
      data: {ShowId: 7},
    });
  }
}
