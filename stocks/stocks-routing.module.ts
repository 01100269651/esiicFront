import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranIncomeComponent } from './Components/tran-income/tran-income.component';
import { TranOutcomeComponent } from './Components/tran-outcome/tran-outcome.component';
import { StksinqrtranComponent } from './Components/stksinqrtran/stksinqrtran.component';
import { InquireComponent } from './Components/inquire/inquire.component';
import { OrderBuyListComponent } from 'src/shared/Components/order-buy-list/order-buy-list.component';
import { StksbckgrndComponent } from './Components/stksbckgrnd/stksbckgrnd.component';
import { SignedOrderBuyComponent } from 'src/shared/Components/signed-order-buy/signed-order-buy.component';
import { StksInComponent } from 'src/shared/Components/stks-in/stks-in.component';
import { StksOutComponent } from 'src/shared/Components/stks-out/stks-out.component';
import { InqrStroesComponent } from 'src/shared/Components/inqr-stroes/inqr-stroes.component';

const routes: Routes = [

  {path:'',component:StksbckgrndComponent},
  {path:'Income',component:StksInComponent , data: { animation: 'statusPage' }},

  {path:'Outcome',component:StksOutComponent},
  
  {path:'Inqr',component:InquireComponent},
  {path:'stksSign',component:OrderBuyListComponent},
  {path:'stksbck',component:StksbckgrndComponent},
  {path:'SignedOrdr',component:SignedOrderBuyComponent},
  {path:'inqrStrs',component:InqrStroesComponent}

  
  // SignedOrdr
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
