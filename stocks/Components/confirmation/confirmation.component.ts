import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { DialogData } from 'src/demands/Components/diag/diag.component';


export interface Dialog2Data {
  res: number ;

}
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {


 

  constructor(   private entertotab:EnterToTabService,
    public dialogRef2: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog2Data,
  ) {}

  onNoClick(): void {
    this.data.res=0;
    this.dialogRef2.close(this.data.res);
   


  }
  onYesClick(){
    this.data.res=1;
    this.dialogRef2.close(this.data.res);
    

  }

}
