import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { repeat } from 'list';
import { bounce } from 'ng-animate';
import { EnterToTabService } from 'src/app/Services/enter-to-tab.service';
import { SCMFactService } from 'src/it-sector/Services/scm-fact.service';
import { ScmSystemConfigService } from 'src/it-sector/Services/scm-system-config.service';

@Component({
  selector: 'app-comp-header',
  templateUrl: './comp-header.component.html',
  styleUrls: ['./comp-header.component.css']
  ,animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 3, delay: 0 }
    }))])
  ],


})
export class CompHeaderComponent {
  SystemName:string='';
  ComName :string='';
  factNo :any ='';
  factName:any;
  grName!:string|null;

  cdate:any;
bounce: any;
myTiming!: any;
myDelay!: any;
  constructor(private SystemInf:ScmSystemConfigService ,   private entertotab:EnterToTabService,private factSer:SCMFactService){
    this.factNo=sessionStorage.getItem('fact');
    this.cdate=new Date()
    this.factSer.GetFactById(this.factNo).subscribe(
      (Response: any) => {

         this.grName=sessionStorage.getItem('grName');
        console.log(Response);
        this.factName =  Response.name.toString();
         
      },
        error => {
          
        }
  
  
  );

    this.SystemInf.GetSysById(1).subscribe(
      async (x: any) => {
        this.SystemName=x.system_Name;
        this.ComName=x.com_Name;

      },
      error => {

      }


    );


  }

}
