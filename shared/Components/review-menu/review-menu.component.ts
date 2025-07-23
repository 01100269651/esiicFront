import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-menu',
  templateUrl: './review-menu.component.html',
  styleUrls: ['./review-menu.component.css']
})
export class ReviewMenuComponent {
usrName:any;
constructor(private router:Router){
this.usrName=sessionStorage.getItem('userName');

}
  signOut(){

    sessionStorage.clear();

this.router.navigate(['']);
  }
}
