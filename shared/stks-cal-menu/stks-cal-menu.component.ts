import { Component, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InqrItmNoOrNameComponent } from '../Components/inqr-itm-no-or-name/inqr-itm-no-or-name.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stks-cal-menu',
  templateUrl: './stks-cal-menu.component.html',
  styleUrls: ['./stks-cal-menu.component.css']
})
export class StksCalMenuComponent {
  

   usrName:any;
itUserSearchForm!: FormGroup;
   constructor( private router:Router,
    public dialog: MatDialog ,
    private fb:FormBuilder
   ){
    this.usrName=sessionStorage.getItem('userName');
   
    this.itUserSearchForm = this.fb.group({

      userId :['',Validators.required],
        
  
    
    });
  }

  signOut(){
    this.router.navigate(['']);
    sessionStorage.clear();

  }
  get userId(){return this.itUserSearchForm.get('userId');}
  search() {

    const dialogRef = this.dialog.open(InqrItmNoOrNameComponent, {
          
      data: {Type: this.userId?.value ,Id:this.userId?.value},
    });
  }

}
