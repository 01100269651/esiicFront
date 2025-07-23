import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InqrItmNoOrNameComponent } from '../inqr-itm-no-or-name/inqr-itm-no-or-name.component';
import { MatDialog } from '@angular/material/dialog';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';

@Component({
  selector: 'app-top-mgm-menu',
  templateUrl: './top-mgm-menu.component.html',
  styleUrls: ['./top-mgm-menu.component.css']
})
export class TopMgmMenuComponent {
  itUserSearchForm!:FormGroup;
search() {

  const dialogRef = this.dialog.open(InqrItmNoOrNameComponent, {
          
    data: {Type: this.SearchItmId?.value ,Id:this.SearchItmId?.value},
  });

}
  usrName:any;

constructor(private rou:Router,public dialog: MatDialog,   private entertotab:EnterToTabService,
  private fb:FormBuilder
){
  this.itUserSearchForm = this.fb.group({
    SearchItmId: ['',Validators.required]});

  this.usrName=sessionStorage.getItem('userName');


}

get SearchItmId(){
  return this.itUserSearchForm.get('SearchItmId');
}



  signOut(){
    sessionStorage.clear();

    this.rou.navigate(['']);

  }

}
