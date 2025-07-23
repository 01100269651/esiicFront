import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMangementRoutingModule } from './top-mangement-routing.module';
import { TopMgmHeaderComponent } from './Components/top-mgm-header/top-mgm-header.component';
import { TopMgmtBackGrndComponent } from './Components/top-mgmt-back-grnd/top-mgmt-back-grnd.component';


@NgModule({
  declarations: [
    TopMgmHeaderComponent,
    TopMgmtBackGrndComponent
  ],
  imports: [
    CommonModule,
    TopMangementRoutingModule
  ]
})
export class TopMangementModule { }
