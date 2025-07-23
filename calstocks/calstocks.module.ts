import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalstocksRoutingModule } from './calstocks-routing.module';

import { StkscalbckgrndComponent } from './Components/stkscalbckgrnd/stkscalbckgrnd.component';
import { UPDMstrComponent } from './Components/updmstr/updmstr.component';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { MatTable,  MatTableDataSource,  MatTableModule } from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RepTransReviewComponent } from './Components/rep-trans-review/rep-trans-review.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxPrintModule } from 'ngx-print';
import { SumStoresComponent } from './Components/sum-stores/sum-stores.component';
import { StoreDetailsComponent } from './Components/store-details/store-details.component';
import { ItemsDistributionComponent } from './Components/items-distribution/items-distribution.component';
import { FactsInvoicesComponent } from './Components/facts-invoices/facts-invoices.component';




@NgModule({
    declarations: [
      
        StkscalbckgrndComponent,
        UPDMstrComponent,
        RepTransReviewComponent,
        SumStoresComponent,
        StoreDetailsComponent,
        ItemsDistributionComponent,
        FactsInvoicesComponent
    ],
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule,
        CalstocksRoutingModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule,
        SharedModule,DataTablesModule,MatTableModule,MatPaginatorModule
        ,MatIconModule,NgxPrintModule,
    ]
})
export class CalstocksModule { }
