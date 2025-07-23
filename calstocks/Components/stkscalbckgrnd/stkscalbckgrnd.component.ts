import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounce, flip, zoomInUp, zoomOutUp } from 'ng-animate';

@Component({
  selector: 'app-stkscalbckgrnd',
  templateUrl: './stkscalbckgrnd.component.html',
  styleUrls: ['./stkscalbckgrnd.component.css'],

  animations: [
    trigger('bounce', [transition('* => *', useAnimation(flip, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 0 }
    }))])
  ],
})
export class StkscalbckgrndComponent {
bounce!: any;

}
