import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasingRoutingModule } from './purchasing-routing.module';
import { PMHomeComponent } from './Components/pmhome/pmhome.component';
import { PreCommitComponent } from './Components/pre-commit/pre-commit.component';
import { OrdListComponent } from './Components/ord-list/ord-list.component';
import { ContinuationComponent } from './Components/continuation/continuation.component';
import { OrdDetailsComponent } from './Components/ord-details/ord-details.component';
import { PurchbkgrComponent } from './components/purchbkgr/purchbkgr.component';
import { NewShowIdComponent } from './Components/new-show-id/new-show-id.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PricingOrderComponent } from './Components/pricing-order/pricing-order.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxPrintModule } from 'ngx-print';
import { SharedModule } from "../shared/shared.module";
import { TaphrghaComponent } from './Components/taphrgha/taphrgha.component';



@NgModule({
    declarations: [
        PMHomeComponent,
        PreCommitComponent,
        ContinuationComponent,
        OrdDetailsComponent,
        PurchbkgrComponent,
        NewShowIdComponent,
        PricingOrderComponent,
        TaphrghaComponent
    ],
    imports: [
    CommonModule,
    PurchasingRoutingModule,
    OrdListComponent, MatIconModule, MatButtonModule,
    MatInputModule, MatPaginatorModule, MatTableModule, NgxPrintModule,
    SharedModule
]
})
export class PurchasingModule { }
