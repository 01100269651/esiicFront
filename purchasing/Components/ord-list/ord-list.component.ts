import { NgIf, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrdDetailsComponent } from '../ord-details/ord-details.component';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';

@Component({
  selector: 'app-ord-list',
  templateUrl: './ord-list.component.html',
  styleUrls: ['./ord-list.component.css'],
  standalone: true,
  imports:[    MatFormFieldModule,    MatInputModule,    FormsModule,    MatButtonModule,    NgIf,NgFor ,    MatDialogModule  ]
  
})
export class OrdListComponent {

  @Input() parentName: string='';
constructor(public OrdDet: MatDialog ,   private entertotab:EnterToTabService){

  
      ///////////////////////////////////
      entertotab.handleEnterKey();

      ////////////////////////////
}


ShowItems():void{

    const dialogRef = this.OrdDet.open(OrdDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });

    
  }

}
