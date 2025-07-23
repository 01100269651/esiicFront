import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OldHistoryComponent } from 'src/demands/Components/old-history/old-history.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InqrItmNoOrNameComponent } from 'src/shared/Components/inqr-itm-no-or-name/inqr-itm-no-or-name.component';



@Component({
  selector: 'app-dmmenu',
  templateUrl: './dmmenu.component.html',
  styleUrls: ['./dmmenu.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule,RouterModule,MatIconModule,MatInputModule,MatDialogModule,FormsModule,ReactiveFormsModule]
})
export class DMMenuComponent {
  searchForm!:FormGroup;
  searchFormForItem!:FormGroup;

  usrName:any;
  constructor(private toastr: ToastrService  
    , private rout:Router,public dialog: MatDialog
    ,private fb:FormBuilder 
    
    ){

       this.usrName =sessionStorage.getItem('userName');

      this.searchForm = this.fb.group({
        SearchId: ['',Validators.required]});

        this.searchFormForItem = this.fb.group({
          SearchItmId: ['',Validators.required]});


    }
  
  get SearchId(){
    return this.searchForm.get('SearchId');
  }
  
  get SearchItmId(){
    return this.searchFormForItem.get('SearchItmId');
  }



  openHistory(){
    const dialogRef = this.dialog.open(OldHistoryComponent, {
      
      data: {ItemId: this.SearchId?.value},
    });
  }
  //=============================================================
  openSearchForItem(){

    // alert(this.SearchItmId?.value)

    const dialogRef = this.dialog.open(InqrItmNoOrNameComponent, {
          
      data: {Type: this.SearchItmId?.value ,Id:this.SearchItmId?.value},
    });
  }


  //==========================================================================================
  SignOut(){
  this.toastr.show("جارى تسجيل الخروج","الخروج من النظام");
  this.rout.navigate(['']);
    sessionStorage.clear();
  //  this.navigat.()
  }

}
