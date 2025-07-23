import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { DemandsRoutingModule } from './demands-routing.module';
import { DMHomeComponent } from './Components/dmhome/dmhome.component';
import { DMMenuComponent } from './shared/dmmenu/dmmenu.component';
import { MatMenu } from '@angular/material/menu';
import { DmsidebarComponent } from './Components/dmsidebar/dmsidebar.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { CreateOrderComponent } from './Components/create-order/create-order.component';
import { DiagComponent } from './Components/diag/diag.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OrderComponent } from './Components/order/order.component';
import { DMInqrComponent } from './Components/dminqr/dminqr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {NgxPrintModule} from 'ngx-print';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { OldHistoryComponent } from './Components/old-history/old-history.component';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {Sort, MatSortModule } from '@angular/material/sort';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IntrcptrTokenInterceptor } from 'src/app/intrcptr-token.interceptor';
import { SharedModule } from "../shared/shared.module";
import { DataTablesModule } from 'angular-datatables';
import { DmBckGrndComponent } from './Components/dm-bck-grnd/dm-bck-grnd.component';
import { ReaptedInFactComponent } from './Components/reapted-in-fact/reapted-in-fact.component';
import { RptdItmsOrdrsComponent } from './Components/rptd-itms-ordrs/rptd-itms-ordrs.component';



@NgModule({
    declarations: [
        DMHomeComponent,
        DmsidebarComponent,
        OrderListComponent,
        OrderComponent,
        DMInqrComponent,
        SpinnerComponent, CreateOrderComponent, DiagComponent, OldHistoryComponent
        , DmBckGrndComponent, ReaptedInFactComponent, RptdItmsOrdrsComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: IntrcptrTokenInterceptor,
            multi: true
        }
    ],
    imports: [
        CommonModule, NgxDatatableModule, MatFormFieldModule, MatTooltipModule,
        DemandsRoutingModule, NgxPrintModule, MatOptionModule, MatInputModule, MatDialogModule,
        DMMenuComponent, MatDialogModule, ReactiveFormsModule, MatSortModule, MatTableModule, MatPaginatorModule,
        MatBadgeModule, MatButtonModule, MatIconModule,
        MatSelectModule, HttpClientModule,DataTablesModule,
        SharedModule
    ]
})
export class DemandsModule { }
