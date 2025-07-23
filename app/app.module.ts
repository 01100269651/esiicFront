import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ITHomeComponent } from './Components/ithome/ithome.component';

import { SharedModule } from 'src/shared/shared.module';

import { ItMenuComponent } from "../shared/it-menu/it-menu.component";

import { PurHomeComponent } from './Components/pur-home/pur-home.component';

import { PMMenuComponent } from 'src/shared/Components/pmmenu/pmmenu.component';

import { PurSideMenuComponent } from 'src/shared/Components/pur-side-menu/pur-side-menu.component';

import { StksHomeComponent } from './Components/stks-home/stks-home.component';

import { StocksMenusComponent } from "../shared/Components/stocks-menus/stocks-menus.component";

import { StocksSideMenuComponent } from 'src/shared/Components/stocks-side-menu/stocks-side-menu.component';

import { EnterAsTabDirective } from 'src/shared/Directves/enter-as-tab.directive';

import { BaseCompComponent } from './Components/base-comp/base-comp.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReviewHomeComponent } from './Components/review-home/review-home.component';
import { StksCalHomeComponent } from './Components/stks-cal-home/stks-cal-home.component';
import { RviewSideMenusComponent } from './Components/rview-side-menus/rview-side-menus.component';
import { TopMgmntHomeComponent } from './Components/top-mgmnt-home/top-mgmnt-home.component';
import { IntrcptrTokenInterceptor } from './intrcptr-token.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';


@NgModule({
  declarations: [
    AppComponent, ITHomeComponent, PurHomeComponent, StksHomeComponent,
    EnterAsTabDirective,
    ReviewHomeComponent,
    StksCalHomeComponent,
    RviewSideMenusComponent,
    TopMgmntHomeComponent
  ],
  providers: [MatAutocompleteModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: IntrcptrTokenInterceptor,
    multi: true
  }, BnNgIdleService]
  ,
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: false
    }), MatAutocompleteModule, MatDialogModule,
    PurSideMenuComponent, StocksSideMenuComponent, MatTableModule,
    HttpClientModule, MatSnackBarModule, MatInputModule, MatPaginatorModule, SharedModule, MatSortModule, MatPaginatorModule
    , MatBadgeModule, MatButtonModule, MatIconModule, DataTablesModule
  ]
})
export class AppModule { }
