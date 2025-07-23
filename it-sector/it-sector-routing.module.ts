import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFactComponent } from './Components/create-fact/create-fact.component';
import { CreateStoreComponent } from './Components/create-store/create-store.component';
import { MainDeptsComponent } from './Components/CodesOFDemandsModule/main-depts/main-depts.component';
import { DeprtmntsComponent } from './Components/CodesOFDemandsModule/deprtmnts/deprtmnts.component';
import { AddItemToMasterComponent } from './Components/add-item-to-master/add-item-to-master.component';
import { CreateCostComponent } from './Components/create-cost/create-cost.component';
import { CreatSupplierComponent } from './Components/creat-supplier/creat-supplier.component';
import { ItemClassComponent } from './Components/item-class/item-class.component';
import { StoreClassComponent } from './Components/store-class/store-class.component';
import { StoreKindComponent } from './Components/store-kind/store-kind.component';
import { CreateItemComponent } from './Components/create-item/create-item.component';
import { CompanyComponent } from './Components/company/company.component';
import { OrderTypesComponent } from './Components/CodesOFDemandsModule/order-types/order-types.component';
import { OrdStatesComponent } from './Components/CodesOFDemandsModule/ord-states/ord-states.component';

import { BkgrndComponent } from './Components/bkgrnd/bkgrnd.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { UsersComponent } from './Components/users/users.component';
import { SuppLyOrdStateComponent } from './Components/CodesOFDemandsModule/supp-ly-ord-state/supp-ly-ord-state.component';
import { SuppLyOrdersComponent } from './Components/CodesOFDemandsModule/supp-ly-orders/supp-ly-orders.component';
import { MasterFactComponent } from './Components/master-fact/master-fact.component';
import { SystemComponent } from './Components/system/system.component';
import { UnitComponent } from './Components/unit/unit.component';

const routes: Routes = [


// أكواد حسابات المخازن


{path:'',component:BkgrndComponent},

{path:'Company',component:CompanyComponent},

{path:'CrtFct',component:CreateFactComponent},

{path:'CrtItm',component:CreateItemComponent},

{path:'CrtStr',component:CreateStoreComponent},

{path:'AddToMstr',component:AddItemToMasterComponent},

{path:'Crtcst',component:CreateCostComponent},

{path:'Spplr',component:CreatSupplierComponent},

{path:'ItmClss',component:ItemClassComponent},

{path:'StrClss',component:StoreClassComponent},

{path:'StrKnd',component:StoreKindComponent},




{path:'DMTypes',component:OrderTypesComponent},

{path:'OrdStats',component:OrdStatesComponent},

{path:'SupOrds',component:SuppLyOrdersComponent},

{path:'SupStats',component:SuppLyOrdStateComponent},




{path:'MnDpt',component:MainDeptsComponent},



{path:'Deprtmnts',component:DeprtmntsComponent},

{path:'CrtGrp',component:GroupsComponent},

{path:'CrtUsr',component:UsersComponent},

{path:'MasterFact',component:MasterFactComponent},

{path:'SystemConfig' , component:SystemComponent},

{path:'unit' , component:UnitComponent},


{path:'Home' , redirectTo:''} ,

{path:'**' , redirectTo:'https://www.scm.erpesiic.com'}






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItSectorRoutingModule { }
