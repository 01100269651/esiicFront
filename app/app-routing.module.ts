
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DMHomeComponent } from 'src/demands/Components/dmhome/dmhome.component';

import { ITHomeComponent } from './Components/ithome/ithome.component';

import { PurHomeComponent } from './Components/pur-home/pur-home.component';

import { StksHomeComponent } from './Components/stks-home/stks-home.component';
import { StksCalHomeComponent } from './Components/stks-cal-home/stks-cal-home.component';
import { ReviewHomeComponent } from './Components/review-home/review-home.component';
import { TopMgmntHomeComponent } from './Components/top-mgmnt-home/top-mgmnt-home.component';
import { authGuard } from './Guards/auth.guard';
import { authItGuard } from './Guards/auth-it.guard';
import { authDmGuard } from './Guards/auth-dm.guard';
import { authPrchGuard } from './Guards/auth-prch.guard';
import { authStocksGuard } from './Guards/auth-stocks.guard';
import { authStocksCalGuard } from './Guards/auth-stocks-cal.guard';
import { authReviewGuard } from './Guards/auth-review.guard';
import { authTopMgmtGuard } from './Guards/auth-top-mgmt.guard';


const routes: Routes = [

  {path:'',component:AppComponent , loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule)},

  {path:'DMHome', component:DMHomeComponent, loadChildren: () => import('src/demands/demands.module').then(mod => mod.DemandsModule),canActivate:[authDmGuard]},

  {path:'PurHome' , component:PurHomeComponent,loadChildren: () => import('src/purchasing/purchasing.module').then(mod => mod.PurchasingModule),canActivate:[authPrchGuard]},

  {path:'ITHome', component:ITHomeComponent, loadChildren: () => import('src/it-sector/it-sector.module').then(mod => mod.ItSectorModule),canActivate:[authItGuard]} ,

  {path:'Stocks', component:StksHomeComponent, loadChildren: () => import('src/stocks/stocks.module').then(mod => mod.StocksModule),canActivate:[authStocksGuard]},

  {path:'CalStocks', component:StksCalHomeComponent, loadChildren: () => import('src/calstocks/calstocks.module').then(mod => mod.CalstocksModule),canActivate:[authStocksCalGuard]},
  // Review
  {path:'Review', component:ReviewHomeComponent, loadChildren: () => import('src/review/review.module').then(mod => mod.ReviewModule),canActivate:[authReviewGuard]},
// top Managemet
  {path:'TopMgmnt', component:TopMgmntHomeComponent, loadChildren: () => import('src/top-mangement/top-mangement.module').then(mod => mod.TopMangementModule),canActivate:[authTopMgmtGuard]}
  

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
