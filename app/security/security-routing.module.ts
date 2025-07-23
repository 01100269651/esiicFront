import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { GroupLoginComponent } from './Components/group-login/group-login.component';
import { DMHomeComponent } from 'src/demands/Components/dmhome/dmhome.component';
import { DemandsModule } from 'src/demands/demands.module';
import { PurchasingModule } from 'src/purchasing/purchasing.module';

import { PMHomeComponent } from 'src/purchasing/Components/pmhome/pmhome.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CreateOrderComponent } from 'src/demands/Components/create-order/create-order.component';

const routes: Routes = [
  {path:'',component:GroupLoginComponent } ,
{path:'userLogin/:appName',component:UserLoginComponent }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { 

  

}
