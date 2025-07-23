import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app-base-comp',

  templateUrl: './base-comp.component.html',

  styleUrls: ['./base-comp.component.css'],
  
  standalone:true

})

export class BaseCompComponent {

  constructor( private rout:Router ){}

  @HostListener('window:keydown.escape', ['$event'])

  onKeyDown(e: any) {

     console.log(e);

     this.rout.navigate(['DMHome']);
     


    
    }
}
