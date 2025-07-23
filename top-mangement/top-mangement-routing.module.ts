import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderBuyListComponent } from 'src/shared/Components/order-buy-list/order-buy-list.component';
import { TopMgmtBackGrndComponent } from './Components/top-mgmt-back-grnd/top-mgmt-back-grnd.component';
import { SignedOrderBuyComponent } from 'src/shared/Components/signed-order-buy/signed-order-buy.component';
import { ItemBalanceComponent } from 'src/shared/Components/item-balance/item-balance.component';

const routes: Routes = [
  {path:'',component:TopMgmtBackGrndComponent},
  {path:'ordrlist',component:OrderBuyListComponent},
  {path:'signedordrlist',component:SignedOrderBuyComponent},
  
  {path:'bckgrnd',component:TopMgmtBackGrndComponent},

  {path:'inqrBal',component:ItemBalanceComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopMangementRoutingModule { }
