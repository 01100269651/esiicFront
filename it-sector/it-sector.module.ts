import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItSectorRoutingModule } from './it-sector-routing.module';
import { CreateFactComponent } from './Components/create-fact/create-fact.component';
import { CreateStoreComponent } from './Components/create-store/create-store.component';
import { StoreClassComponent } from './Components/store-class/store-class.component';
import { StoreKindComponent } from './Components/store-kind/store-kind.component';
import { CreateCostComponent } from './Components/create-cost/create-cost.component';
import { CreatSupplierComponent } from './Components/creat-supplier/creat-supplier.component';
import { CreatCostAccComponent } from './Components/creat-cost-acc/creat-cost-acc.component';
import { AddItemToMasterComponent } from './Components/add-item-to-master/add-item-to-master.component';
import { ItemClassComponent } from './Components/item-class/item-class.component';
import { MainDeptsComponent } from './Components/CodesOFDemandsModule/main-depts/main-depts.component';
import { DeprtmntsComponent } from './Components/CodesOFDemandsModule/deprtmnts/deprtmnts.component';
import { CreateItemComponent } from './Components/create-item/create-item.component';
import { OrderTypesComponent } from './Components/CodesOFDemandsModule/order-types/order-types.component';
import { OrdStatesComponent } from './Components/CodesOFDemandsModule/ord-states/ord-states.component';

import { CompanyComponent } from './Components/company/company.component';
import { BkgrndComponent } from './Components/bkgrnd/bkgrnd.component';
import { UsersComponent } from './Components/users/users.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuppLyOrdersComponent } from './Components/CodesOFDemandsModule/supp-ly-orders/supp-ly-orders.component';
import { SuppLyOrdStateComponent } from './Components/CodesOFDemandsModule/supp-ly-ord-state/supp-ly-ord-state.component';
import { MasterFactComponent } from './Components/master-fact/master-fact.component';

import { SystemComponent } from './Components/system/system.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserControlComponent } from './Components/user-control/user-control.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { UnitComponent } from './Components/unit/unit.component';


@NgModule({
    declarations: [
        CreateFactComponent,
        CreateStoreComponent,
        StoreClassComponent,
        StoreKindComponent,
        CreateCostComponent,
        CreatSupplierComponent,
        CreatCostAccComponent,
        AddItemToMasterComponent,
        ItemClassComponent,
        MainDeptsComponent,
        DeprtmntsComponent,
        CreateItemComponent,
        OrderTypesComponent,
        OrdStatesComponent,
        CompanyComponent,
        BkgrndComponent,
        UsersComponent,
        GroupsComponent,
        SuppLyOrdersComponent,
        SuppLyOrdStateComponent,
        MasterFactComponent,
        SystemComponent,
        UserControlComponent,
        UnitComponent
    ],
    imports: [
        CommonModule,
        ItSectorRoutingModule, FormsModule,
        ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule,
        MatTableModule,SharedModule , MatPaginatorModule ,MatInputModule,MatSelectModule,MatRadioModule
        
    ]
})
export class ItSectorModule { }
