import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { ToastrService } from 'ngx-toastr';
import { MenuComponent } from 'src/shared/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'SCM';

  idleState : string ="Not Started";

  constructor(
    private cd:ChangeDetectorRef,
    private toastr:ToastrService) {

    
    //   idle.setIdle(5);
    //  idle.setTimeout(5);
    //   idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    //   idle.onIdleStart.subscribe(()=>{
    //    // this.idleState="started";
    //     cd.detectChanges();

    //     console.log('onIdleEnd');

    //  //   alert("onIdleEnd") ;

    //   });

      // idle.onTimeout.subscribe(()=>{

      //   this.idleState ="Timedout" ;

      //   alert("Time out");

       


      // });

//       idle.onIdleStart.subscribe(()=>{

//         this.idleState="Idle";
// alert("Idle Go Out")

//       });


    // this.bnIdle.startWatching(60).subscribe((res) => {

    //   if (res) {

    //     this.router.navigate(['/']);

    //    // alert("مدة الصلاحية انتهت");

    //    this.toastr.warning("انتهت مدة الصلاحية ","رجاء تسجيل الدخول",{}) ;

    //   }

    // })
    

  }

  ngOnInit(): void {
   
    this.setstate();
  }

  setstate(){
    // this.idle.watch();
    // this.idleState="Started";

  }
}