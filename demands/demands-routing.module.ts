import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DMHomeComponent } from './Components/dmhome/dmhome.component';

import { OrderListComponent } from './Components/order-list/order-list.component';

import { CreateOrderComponent } from './Components/create-order/create-order.component';

import { DMInqrComponent } from './Components/dminqr/dminqr.component';

import { OldHistoryComponent } from './Components/old-history/old-history.component';
import { OrderBuyListComponent } from 'src/shared/Components/order-buy-list/order-buy-list.component';
import { DmBckGrndComponent } from './Components/dm-bck-grnd/dm-bck-grnd.component';
import { SignedOrderBuyComponent } from 'src/shared/Components/signed-order-buy/signed-order-buy.component';
import { ReaptedInFactComponent } from './Components/reapted-in-fact/reapted-in-fact.component';


const routes: Routes = [{path:'',component:DmBckGrndComponent},

{path:'CreateOrd',component:CreateOrderComponent},

{path:'OrdList',component:OrderBuyListComponent},

{path:'dminqr',component:DMInqrComponent},

{path:'oldHistory',component:OldHistoryComponent},

{path:'Home',redirectTo:''},

// signedOrders

{path:'signedOrders',component:SignedOrderBuyComponent} ,

{path:'repeated',component:ReaptedInFactComponent}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class DemandsRoutingModule { }
