import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderBuyListComponent } from 'src/shared/Components/order-buy-list/order-buy-list.component';
import { StkscalbckgrndComponent } from './Components/stkscalbckgrnd/stkscalbckgrnd.component';
import { SignedOrderBuyComponent } from 'src/shared/Components/signed-order-buy/signed-order-buy.component';
import { StksInComponent } from 'src/shared/Components/stks-in/stks-in.component';
import { StksOutComponent } from 'src/shared/Components/stks-out/stks-out.component';
import { UPDMstrComponent } from './Components/updmstr/updmstr.component';
import { ItemBalanceComponent } from 'src/shared/Components/item-balance/item-balance.component';
import { RepTransReviewComponent } from './Components/rep-trans-review/rep-trans-review.component';
import { SumStoresComponent } from './Components/sum-stores/sum-stores.component';
import { StoreDetailsComponent } from './Components/store-details/store-details.component';
import { ItemsDistributionComponent } from './Components/items-distribution/items-distribution.component';
import { FactsInvoicesComponent } from './Components/facts-invoices/facts-invoices.component';


const routes: Routes = [

  {path:'',component:StkscalbckgrndComponent},

  {path:'odrlist',component:OrderBuyListComponent},

  {path:'signedodrlist',component:SignedOrderBuyComponent},
  
  {path:'stkscalbckgrnd', component:StkscalbckgrndComponent},

  {path:'tranIn',component:StksInComponent},
  
  {path:'tranOut', component:StksOutComponent},
  
  {path:'updmstr', component:UPDMstrComponent},

  {path:'itmBal', component:ItemBalanceComponent},

  {path:'Review', component:RepTransReviewComponent},

  {path:'SumStores', component:SumStoresComponent},

 {path:'DetailsStores', component:StoreDetailsComponent},

 {path:'ItmsDist', component:ItemsDistributionComponent} ,

 {path:'factsInvoices', component:FactsInvoicesComponent}
  
  // 

  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalstocksRoutingModule { }
