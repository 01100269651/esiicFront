import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { StocksRoutingModule } from './stocks-routing.module';
import { TranIncomeComponent } from './Components/tran-income/tran-income.component';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { OrdDetailsComponent } from './Components/ord-details/ord-details.component';
import { StksinqrtranComponent } from './Components/stksinqrtran/stksinqrtran.component';
import { ItemCardComponent } from './Components/item-card/item-card.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
////////////////////////////////////////////////////////////
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { TranOutcomeComponent } from './Components/tran-outcome/tran-outcome.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { InquireComponent } from './Components/inquire/inquire.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from 'src/shared/shared.module';
import { StksbckgrndComponent } from './Components/stksbckgrnd/stksbckgrnd.component';
import { PageTransactionsComponent } from './Components/page-transactions/page-transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




/////////////////////////////////////////////





@NgModule({
    declarations: [
        TranIncomeComponent,
        TranOutcomeComponent,
        OrdDetailsComponent,
        StksinqrtranComponent,
        ItemCardComponent,
        ConfirmationComponent,
        InquireComponent,
        StksbckgrndComponent,
        PageTransactionsComponent
        
    ],
    imports: [
        CommonModule, MatDatepickerModule, MatFormFieldModule, MatButtonModule,
        StocksRoutingModule,
        MatButtonModule, MatIconModule,
        MatSelectModule,
        MatInputModule, MatButtonModule, MatRippleModule,
        ReactiveFormsModule, MatTableModule,
        MatButtonModule, MatSortModule, MatPaginatorModule,
        NgIf, NgFor,
        MatDialogModule,SharedModule

    ],exports:[InquireComponent]
})
export class StocksModule { }
