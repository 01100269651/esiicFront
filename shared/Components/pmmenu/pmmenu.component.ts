import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-pmmenu',
  templateUrl: './pmmenu.component.html',
  styleUrls: ['./pmmenu.component.css']
 

})
export class PMMenuComponent {
   usrName!:any;

  constructor(private rou:Router){
    this.usrName=sessionStorage.getItem('userName');
  }

  signOut(){
    sessionStorage.clear();
    this.rou.navigate(['']);

  }

}
