import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { flipInX, rollIn, rollOut } from 'ng-animate';

@Component({
  selector: 'app-stksbckgrnd',
  templateUrl: './stksbckgrnd.component.html',
  styleUrls: ['./stksbckgrnd.component.css'],
  animations: [
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))])

    ,
    trigger('rollOut', [transition('* => *', useAnimation(rollOut, {   params: { timing: 5, delay: 0 }    }))])
    , trigger('flipInX', [transition('* => *', useAnimation(flipInX))])

  ],
})
export class StksbckgrndComponent {
bounce: any;
myTiming: any;
myDelay: any;

}
