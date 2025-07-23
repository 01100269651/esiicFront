import { AnimationPlayer } from '@angular/animations';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { InSTOKService } from 'src/stocks/Services/in-stok.service';

@Component({
  selector: 'app-page-transactions',
  templateUrl: './page-transactions.component.html',
  styleUrls: ['./page-transactions.component.css']
})
export class PageTransactionsComponent implements OnChanges,OnDestroy {

  private dataSubscription!: Subscription;

@Input() Fact:any=0;

@Input() TrCode:any=0;

@Input() TrDate!:any;

@Input() Page:any=0;

fact:any;
displayedColumns: string[] = ['scM_Fact.name' ,'Store_Id','scM_Store.name','Tran_Date','Page','Ser','Cost_ID','scM_Item.name','Quantity','Exe_Rec_No','Exe_Rec_Date'];
tranactions:any[]=[];
isLoading!:boolean;

constructor(private tranSer:InSTOKService ,   private entertotab:EnterToTabService){
  
///////////////////////////////////////////////////========================      
entertotab.handleEnterKey();
///////////////////////////////////////////////////========================



}
ngOnChanges(): void {
  this.isLoading=true;
this.getPageLines();
 

}

private getPageLines(){
//   this.tranSer.GetPage(this.Fact,this.TrDate,this.TrCode,this.Page)
//   .subscribe(
// (x:any)=>{
//   this.isLoading=false;
//  this.tranactions=x;
//  console.log(this.tranactions);
// },

// error=>{
//   alert("");
// }
//   );



const intervalTime = 3000;

// Create an observable that emits a value every second
const dataObservable = interval(intervalTime);

// Subscribe to the observable to fetch data every second
this.dataSubscription=dataObservable.subscribe(() => {
  this.tranSer.GetPage(this.Fact, this.TrDate, this.TrCode, this.Page).subscribe(
    (Response: any) => {
      // console.log(Response);
      this.tranactions = Response;
      // console.log(this.tranactions);
      this.isLoading = false;
    },
    error => {
      // console.log(error);
      this.isLoading = false;
    }
  );
});
  
}

ngOnDestroy() {
  // Unsubscribe from the data subscription
  if (this.dataSubscription) {
    console.log('ddddd');
    this.dataSubscription.unsubscribe();
  }


}
}
