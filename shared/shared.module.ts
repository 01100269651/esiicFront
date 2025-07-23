import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { ITSideMenuComponent } from './Components/itside-menu/itside-menu.component';
import { PMMenuComponent } from './Components/pmmenu/pmmenu.component';
import { PurSideMenuComponent } from './Components/pur-side-menu/pur-side-menu.component';
import { StocksMenusComponent } from './Components/stocks-menus/stocks-menus.component';
import { StocksSideMenuComponent } from './Components/stocks-side-menu/stocks-side-menu.component';
import { ShSpinnerComponent } from './Components/sh-spinner/sh-spinner.component';
import { SelectFactComponent } from './Components/select-fact/select-fact.component';
import { ItMenuComponent } from './it-menu/it-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderBuyListComponent } from './Components/order-buy-list/order-buy-list.component';
import { OrderBuyComponent } from './Components/order-buy/order-buy.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { NgxPrintModule } from 'ngx-print';
import { MatMenuModule } from '@angular/material/menu';
import { TopMgmHeaderComponent } from 'src/top-mangement/Components/top-mgm-header/top-mgm-header.component';
import { TopMgmMenuComponent } from './Components/top-mgm-menu/top-mgm-menu.component';
import { TopMangementModule } from 'src/top-mangement/top-mangement.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OrderLogComponent } from './Components/order-log/order-log.component';
import { DataTablesModule } from 'angular-datatables';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { StksCalMenuComponent } from './stks-cal-menu/stks-cal-menu.component';
import { ReviewMenuComponent } from './Components/review-menu/review-menu.component';
import { CompHeaderComponent } from './Components/comp-header/comp-header.component';
import { SignedOrderBuyComponent } from './Components/signed-order-buy/signed-order-buy.component';
import { StksInComponent } from './Components/stks-in/stks-in.component';
import { PageTransComponent } from './Components/page-trans/page-trans.component';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { StksOutComponent } from './Components/stks-out/stks-out.component';
import { ItemBalanceComponent } from './Components/item-balance/item-balance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InqrItmNoOrNameComponent } from './Components/inqr-itm-no-or-name/inqr-itm-no-or-name.component';
import { StoresInqrComponent } from './Components/stores-inqr/stores-inqr.component';
import { ItmMstrComponent } from './Components/itm-mstr/itm-mstr.component';
import { InqrStroesComponent } from './Components/inqr-stroes/inqr-stroes.component';









@NgModule({
  declarations: [
    
    ITSideMenuComponent,ShSpinnerComponent, SelectFactComponent,ItMenuComponent, OrderBuyListComponent,StocksMenusComponent,
     OrderBuyComponent,TopMgmMenuComponent, OrderLogComponent, StksCalMenuComponent, PMMenuComponent,
     ReviewMenuComponent, CompHeaderComponent, SignedOrderBuyComponent, StksInComponent, PageTransComponent, StksOutComponent, ItemBalanceComponent, InqrItmNoOrNameComponent, StoresInqrComponent, ItmMstrComponent, InqrStroesComponent
           
          
  ] ,
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule,MatIconModule ,MatTableModule,MatBadgeModule, MatButtonModule,
    NgxPrintModule,MatMenuModule,MatProgressBarModule,DataTablesModule,MatPaginatorModule,MatInputModule,MatOptionModule
,MatFormFieldModule ,MatFormFieldModule,MatSortModule,MatSelectModule,MatIconModule 

  ],
  
  
  
  
  exports:[
  
    ShSpinnerComponent,SelectFactComponent,OrderBuyComponent,OrderBuyListComponent,ItMenuComponent,
    StocksMenusComponent,TopMgmMenuComponent,StksCalMenuComponent,ReviewMenuComponent,CompHeaderComponent,SignedOrderBuyComponent,
    StksInComponent,StksOutComponent,ItemBalanceComponent,PMMenuComponent,StoresInqrComponent ,InqrStroesComponent
  
  ]
})
export class SharedModule { }
