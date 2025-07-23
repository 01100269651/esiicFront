import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { backInUp, backOutUp, jackInTheBox } from 'ng-animate';

@Component({
  selector: 'app-dm-bck-grnd',
  templateUrl: './dm-bck-grnd.component.html',
  styleUrls: ['./dm-bck-grnd.component.css']  ,animations: [
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 1, delay: 0 }
    }))])
  ],
})
export class DmBckGrndComponent {
bounce: any;
myTiming: any;
myDelay: any;
jackInTheBox: any;

}
