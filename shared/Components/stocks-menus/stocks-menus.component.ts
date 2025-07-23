import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { error } from 'jquery';
import { take } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InqrItmNoOrNameComponent } from '../inqr-itm-no-or-name/inqr-itm-no-or-name.component';
import { MatDialog } from '@angular/material/dialog';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';


@Component({
  selector: 'app-stocks-menus',
  templateUrl: './stocks-menus.component.html',
  styleUrls: ['./stocks-menus.component.css']


  
})
export class StocksMenusComponent {

  usrName:any;
itUserSearchForm!: FormGroup;
  constructor(   private entertotab:EnterToTabService, public dialog: MatDialog ,private toastr:ToastrService,private rout:Router,private fb:FormBuilder){
    this.usrName=sessionStorage.getItem('userName');
    this.itUserSearchForm = this.fb.group({

      userId :['',Validators.required],
        
  
    
    });

  }


  asd(){
    this.toastr.warning("جارى تسجيل الخروج","الخروج من النظام");

    
  //   this.toastr.toastrConfig().show("Test", "vvvvvvvvvvvv",{})
  //   .onAction.subscribe(x => 
  //     {
  //     alert("55 is pressed");
  //     console.log(x);
  //   },error=>{}
  // );

//=======================================================

//===================================================================================


     this.rout.navigate(['']);
     sessionStorage.clear();
  }
  //===========================

  get userId(){return this.itUserSearchForm.get('userId');}

  //=================================================================
  search() {
   
        const dialogRef = this.dialog.open(InqrItmNoOrNameComponent, {
              
          data: {Type: this.userId?.value ,Id:this.userId?.value},
        });
      }
    
  //==========================

}
