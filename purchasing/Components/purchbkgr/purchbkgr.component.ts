import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { jackInTheBox, rollIn, rollOut } from 'ng-animate';

@Component({
  selector: 'app-purchbkgr',
  templateUrl: './purchbkgr.component.html',
  styleUrls: ['./purchbkgr.component.css']
  , animations: [
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))])

    ,
    trigger('rollOut', [transition('* => *', useAnimation(rollOut, {   params: { timing: 5, delay: 0 }    }))])
  ],
})
export class PurchbkgrComponent {
  bounce!:any;

}
