import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounce, rollIn } from 'ng-animate';

@Component({
  selector: 'app-top-mgmt-back-grnd',
  templateUrl: './top-mgmt-back-grnd.component.html',
  styleUrls: ['./top-mgmt-back-grnd.component.css']
  , animations: [
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))])

    ,
    trigger('bounce', [transition('* => *', useAnimation(bounce, {   params: { timing: 5 }    }))])
  ],
})
export class TopMgmtBackGrndComponent {
bounce: any;
myTiming: any;
myDelay: any;

}
