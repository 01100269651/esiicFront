import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'EnterAsTabDirective'
})
export class EnterAsTabDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown.enter', ['$event.target'])
  onEnterKey(nextInput: HTMLInputElement): void {
    nextInput.focus();
   
  }
}