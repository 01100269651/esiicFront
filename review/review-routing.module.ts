import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderBuyListComponent } from 'src/shared/Components/order-buy-list/order-buy-list.component';
import { BckgrndReviewComponent } from './Components/bckgrnd-review/bckgrnd-review.component';

const routes: Routes = [
  {path:'',component:BckgrndReviewComponent},

  {path:'ordrlist',component:OrderBuyListComponent},

  {path:'Home',redirectTo:''}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
