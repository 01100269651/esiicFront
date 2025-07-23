import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-stks-home',
  templateUrl: './stks-home.component.html',
  styleUrls: ['./stks-home.component.css']
})
export class StksHomeComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}

}
