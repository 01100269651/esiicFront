import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurHomeComponent } from 'src/app/Components/pur-home/pur-home.component';
import { PreCommitComponent } from './Components/pre-commit/pre-commit.component';
import { ContinuationComponent } from './Components/continuation/continuation.component';
import { PurchbkgrComponent } from './components/purchbkgr/purchbkgr.component';
import { SignedOrderBuyComponent } from 'src/shared/Components/signed-order-buy/signed-order-buy.component';
import { NewShowIdComponent } from './Components/new-show-id/new-show-id.component';


const routes: Routes = [
{path:'',component:PurchbkgrComponent},
{path:'PreCom',component:PreCommitComponent},
{path:'Con',component:ContinuationComponent},
{path:'Signed',component:SignedOrderBuyComponent},
{path:'home',redirectTo:''},
{path:'newShow',component:NewShowIdComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule { }

