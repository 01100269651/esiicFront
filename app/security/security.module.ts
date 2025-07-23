import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { GroupLoginComponent } from './Components/group-login/group-login.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { FormsModule,ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { SharedModule } from "../../shared/shared.module";
import { ImageRowComponent } from './Components/image-row/image-row.component';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';







@NgModule({
    declarations: [
        GroupLoginComponent,
        UserLoginComponent,
        NotfoundComponent,
        ImageRowComponent
        
    ],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,MatInputModule,MatOptionModule,MatSelectModule
    ]
})
export class SecurityModule { }
