





//========================================================================================
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';

import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { OrderBuyComponent } from '../order-buy/order-buy.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';





@Component({
  selector: 'app-order-buy-list',
  templateUrl: './order-buy-list.component.html',
  styleUrls: ['./order-buy-list.component.css']
})
export class OrderBuyListComponent implements AfterViewInit {
  dataSource: any;
  
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  
    

  displayedColumns: string[] = ['fact_Name','main_Dept','ord_Date','cause','ord_Id','type_Name','actions' ,'actionsNo' ];
  // ,'Store_Id','scM_Store.name','Tran_Date','Page','Ser','Cost_ID','scM_Item.name','Quantity','Exe_Rec_No','Exe_Rec_Date'];

  itms:any[]=[];
  fact:any="";
  isLoading:boolean=true;
  finYear:any="";
  isActive = false;

 
  selectedRowIndex:any;



  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private ordSer:OrdMstrService ,
    private usrCtrl:UserContrlService ,
    private toastr:ToastrService ){
   
  this.fact=sessionStorage.getItem("fact");
  this.finYear=sessionStorage.getItem("FinYear");

  
 
  this.isLoading=true;
 
    this.ordSer.GetOrdByFact(this.fact, this.finYear).subscribe(
 
      (Response: any) => {
        this.isLoading=false;     
      
    
        //this.iap=Response;
        
         console.log(Response);
        
  
        
        this.itms= Response;

        
        this.dataSource = new MatTableDataSource(Response);
        this.dataSource.data = Response;
        this.dataSource.length = Response.length;
        this.dataSource.paginator = this.paginator; // Connect the paginator here
        const dataSource = new MatTableDataSource(Response);
        dataSource.paginator = this.paginator;
        console.log(dataSource);
        // this.isLoading=false;
        dataSource.data=Response;
  

 
  
      },
      
      error => {

        console.log(error); // Print the error object to the console


      }   
    
    )
    ;

    this.isLoading=false;

    //////

// this.usrCtrl.getIPAddress().subscribe(
 
//   (x: any) => {

//     //this.iap=Response;
    
//     let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),

//     Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

//     Win_Name:'شاشة قائمة طلبات الشراء',Action:'open',Order:'',Order_Type:'',


//       Ip_Address: x.ip
//     };
   
//     // console.log(ctrl.Order);
//     this.usrCtrl.addCtrl(ctrl).subscribe(
//       next => {},
//       error=>{}
      

//     );
    
//    // console.log(Response);
//   });


///////////////////


  }
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  announceSortChange(sortState: Sort){


    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  

  fun(tp:any,id:any){
    // this.usrCtrl.getIPAddress().subscribe(
 
    //   (x: any) => {
    
    //     //this.iap=Response;
    //     let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
    //     Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
    //     Win_Name:'شاشة قائمة طلبات الشراء',Action:'قبول اعتماد',Order:id,Order_Type:tp,
    
    
    //       Ip_Address: x.ip
    //     };
       
    //     // console.log(ctrl.Order);
    //     this.usrCtrl.addCtrl(ctrl).subscribe(
    //       next => {},
    //       error=>{}
          
    
    //     );
        
    //    // console.log(Response);
    //   });


    var gr=sessionStorage.getItem('appId');
    var role=sessionStorage.getItem("role");

   // alert(i);
   if(Number(gr) ==1 && Number(role) !=30)
   {
    this.ordSer.SignOkIc(tp,id).subscribe(
  
    async (x:any)=>{
      // alert(String(tp));
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
       
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد مراقبة المخزون',Order:String(id),Order_Type:String(tp),
      
      
            Ip_Address: x.ip
          };
         
            console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
         // console.log(Response);
        });
      
  
      this.toastr.success("تم اعتماد مراقبة المخزون");
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
  


    },
    error=>{
    
      this.toastr.error("لم يتم اعتماد مراقبة المخزون")
    }


   );

   }
  
   if(Number(gr) ==3)
   {
    this.ordSer.SignOkGnrlStks(tp,id).subscribe(
    async (x:any)=>{
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد المخزن العام',Order:String(id),Order_Type:String(tp),
      
      
            Ip_Address: x.ip
          };
         
          // console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
         // console.log(Response);
        });
      this.toastr.success("تم اعتماد المخزن العام")
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
    },
    error=>{

      this.toastr.error("لم يتم اعتماد المخزن العام")
    }
   );

  }

//=============================================================



  if(Number(gr) ==4 && Number(role) !=30)
  {
    this.ordSer.SignOkCalStks(tp,id).subscribe(
   async (x:any)=>{
    this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد حسابات المخازن',Order:String(id),Order_Type:tp,
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
        
       // console.log(Response);
      });
     this.toastr.success("تم اعتماد حسابات المخازن");
     const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
   },
   error=>{
   
     this.toastr.error("لم يتم اعتماد حسابات المخازن")
   }


  );
 
 
 }
//=========================================================================

   if(Number(gr) ==7)
   {this.ordSer.SignOkReview(tp,id).subscribe(
    async (x:any)=>{
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد المراجعة',Order:String(id),Order_Type:tp,
      
      
            Ip_Address: x.ip
          };
         
          // console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
         // console.log(Response);
        });
      this.toastr.success("تم اعتماد المراجعة");
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
    },

    error=>{


      this.toastr.error("لم يتم اعتماد المراجعة")
    }


   );}

//  =============================================
//مدير عام الهندسة
 if(Number(gr) ==1 && Number(role) ==30)
{
  this.ordSer.SignOkEng(tp,id).subscribe(
    async (x:any)=>{
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد مدير عام الهندسة',Order:String(id),Order_Type:tp,


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      
    );
          
    // console.log(Response);
   });
   
    
    this.toastr.success("تم اعتماد مدير عام الهندسة") ;
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(1000);
  window.location.reload();
  },
  error=>{    this.toastr.error("لم يتم اعتماد مدير عام الهندسة")  } );


  }
  
  //مدير عام المالي
  if(Number(gr) ==4 && Number(role) ==30)
  {
  
    this.ordSer.SignOkFin(tp,id).subscribe(
      
    async (x:any)=>{
      // alert(String(tp));
      this.usrCtrl.getIPAddress().subscribe(

    async (x:any)=>{ 
    
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد مدير عام المالي',Order:String(id),Order_Type:tp,
  
  
        Ip_Address: x.ip
      };
   
      // console.log(ctrl.Order);
      this.usrCtrl.addCtrl(ctrl).subscribe(
        next => {},
        error=>{}
      );
  
      });
     
      this.toastr.success("تم اعتماد مدير عام المالي")  ;
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1000);
    window.location.reload();
  },
    error=>{    this.toastr.error("لم يتم اعتماد مدير عام المالي")  } );
  
  
    }
// ============================================================
    //  نائب رئيس قطاعات المصانع
    if(Number(gr) ==6 && Number(role) ==35)
    {
      this.ordSer.SignOkFactViceCEO(tp,id).subscribe(
        async (x:any)=>{
          // alert(String(tp));
          this.usrCtrl.getIPAddress().subscribe(
     
            (x: any) => { 
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد نائب رئيس قطاعات',Order:String(id),Order_Type:tp,
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
          
        // console.log(Response);
       });
        
        
        this.toastr.success("تم اعتماد نائب رئيس قطاعات المصانع") ;
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
    
    
    },
      error=>{    this.toastr.error("لم يتم اعتماد نائب رئيس قطاعات المصانع")  } );
    
    
      }


// ============================================================
    // رئيس قطاعات المصانع
    if(Number(gr) ===6 && Number(role) ===40)
    {
      this.ordSer.SignOkFactCEO(tp,id).subscribe(
        async (x:any)=>{
          // alert(String(tp));
          this.usrCtrl.getIPAddress().subscribe(
     
            (x: any) => {

        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد رئيس قطاعات المصانع',Order:String(id),Order_Type:tp,
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
          
        // console.log(Response);
       });
        
        
        this.toastr.success("تم اعتماد رئيس قطاعات المصانع") ;
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
          alert("");
      
          //this.iap=Response;
          let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
          Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
      
          Win_Name:'شاشة قائمة طلبات الشراء',Action:' قبول اعتماد رئيس قطاعات المصانع',Order:id,Order_Type:tp,
      
      
            Ip_Address: x.ip
          };
         
           console.log(ctrl.Order);
          this.usrCtrl.addCtrl(ctrl).subscribe(
            next => {},
            error=>{}
            
      
          );
          
         // console.log(Response);
        });
    
    
    },
      error=>{    this.toastr.error("لم يتم اعتماد رئيس قطاعات المصانع")  } );
    
    
      }

  
}






///.............................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




  funNo(tp:any,id:any){
    // alert(i);
    var gr=sessionStorage.getItem('appId');
    var role=sessionStorage.getItem("role");
    this.usrCtrl.getIPAddress().subscribe(
 
      (x: any) => {
    
        //this.iap=Response;
        // let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
    
        // Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        // Win_Name:'شاشة قائمة طلبات الشراء',Action:'رفض اعتماد',Order:id,Order_Type:tp,
    
    
        //   Ip_Address: x.ip
        // };
       
        // // console.log(ctrl.Order);
        // this.usrCtrl.addCtrl(ctrl).subscribe(
        //   next => {},
        //   error=>{}
          
    
        // );
        
       // console.log(Response);
      });
    // alert(i);
    if(Number(gr) ==1 && Number(role)!=30){
    this.ordSer.SignNotOkIc(tp,id).subscribe(
      async (x:any)=>{
        // alert(String(tp));
        this.usrCtrl.getIPAddress().subscribe(
   
          (x: any) => {
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتماد مراقبة المخزون',Order:String(id),Order_Type:tp,
  
  
        Ip_Address: x.ip
      };
     
      // console.log(ctrl.Order);
      this.usrCtrl.addCtrl(ctrl).subscribe(
        next => {},
        error=>{}
        
  
      );
          
      // console.log(Response);
     });
      
       this.toastr.success("تم  رفض الطلب  مراقبة المخزون");
       const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
     },
     error=>{
       this.toastr.error(" مراقبة المخزون لم يتم  رفض الطلب")
     }
 
 
    );
  }
  // ======================================================================================

  if(Number(gr) ==3)
  {
   this.ordSer.SignNotOkGnrlStks(tp,id).subscribe(
    async (x:any)=>{
      // alert(String(tp));
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {

    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتماد المخزن العام',Order:String(id),Order_Type:tp,


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
          
    // console.log(Response);
   });


     this.toastr.success("تم رفض المخزن العام");
     const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
   },
   error=>{
     this.toastr.error("لم يتم رفض المخزن العام")
   }
  );

 }

//=============================================================



 if(Number(gr) ==4 && Number(role) !=30)
 {
   this.ordSer.SignNotOkCalStks(tp,id).subscribe(
    async (x:any)=>{
      // alert(String(tp));
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتماد حسابات المخازن',Order:String(id),Order_Type:tp,


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
          
    // console.log(Response);
   });
    this.toastr.success("تم رفض حسابات المخازن");
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
  },
  error=>{
    this.toastr.error("لم يتم رفض حسابات المخازن")
  }


 );


}
//=========================================================================

  if(Number(gr) ==7)
  {this.ordSer.SignNotOkReview(tp,id).subscribe(
    async (x:any)=>{
      // alert(String(tp));
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتماد المراجعة',Order:String(id),Order_Type:tp,


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
          
    // console.log(Response);
   });
     this.toastr.success("تم رفض المراجعة");
     const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
   },
   error=>{
     this.toastr.error("لم يتم رفض المراجعة")
   }


  );}

//  =============================================
//مدير عام الهندسة
if(Number(gr) ==1 && Number(role) ==30)
{
 this.ordSer.SignNotOkEng(tp,id).subscribe(
  async (x:any)=>{
    // alert(String(tp));
    this.usrCtrl.getIPAddress().subscribe(

      (x: any) => {
  let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
  Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

  Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتماد مديرعام الهندسة',Order:String(id),Order_Type:tp,


    Ip_Address: x.ip
  };
 
  // console.log(ctrl.Order);
  this.usrCtrl.addCtrl(ctrl).subscribe(
    next => {},
    error=>{}
    

  );
          
  // console.log(Response);
 });
  this.toastr.success("تم رفض مدير عام الهندسة") ;
 const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();

},
 error=>{    this.toastr.error("لم يتم رفض مدير عام الهندسة")  } );


 }
 
 //مدير عام المالي
 if(Number(gr) ==4 && Number(role) ==30)
 {
   this.ordSer.SignNotOkFin(tp,id).subscribe(
    async (x:any)=>{
      // alert(String(tp));
      this.usrCtrl.getIPAddress().subscribe(
 
        (x: any) => {
    let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
    Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),

    Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتماد مديرعام المالي',Order:String(id),Order_Type:tp,


      Ip_Address: x.ip
    };
   
    // console.log(ctrl.Order);
    this.usrCtrl.addCtrl(ctrl).subscribe(
      next => {},
      error=>{}
      

    );
          
    // console.log(Response);
   });
    
    this.toastr.success("تم رفض مدير عام المالي");

   const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
  
  
  },
   error=>{    this.toastr.error("لم يتم رفض مدير عام المالي")  } );
 
 
   }
// ============================================================

// ============================================================
// نائب رئيس قطاعات المصانع  
    if(Number(gr) ==6 && Number(role) ==35)
    {
      this.ordSer.SignNotOkFactViceCEO(tp,id).subscribe(
        async (x:any)=>{
          // alert(String(tp));
          this.usrCtrl.getIPAddress().subscribe(
     
            (x: any) => {
        let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
        Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
    
        Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتمادنائب رئيس قطاعات المصانع',Order:String(id),Order_Type:tp,
    
    
          Ip_Address: x.ip
        };
       
        // console.log(ctrl.Order);
        this.usrCtrl.addCtrl(ctrl).subscribe(
          next => {},
          error=>{}
          
    
        );
          
        // console.log(Response);
       });
        this.toastr.success("تم رفض اعتماد نائب رئيس قطاعات المصانع") ;
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
    
    
    },
      error=>{    this.toastr.error("لم يتم رفض اعتماد نائب رئيس قطاعات المصانع")  } );
    
    
      }
   // رئيس قطاعات المصانع
   if(Number(gr) ==6 && Number(role) ==40)
   {
     this.ordSer.SignNotOkFactCEO(tp,id).subscribe(
      async (x:any)=>{
        // alert(String(tp));
        this.usrCtrl.getIPAddress().subscribe(
   
          (x: any) => { 
      let ctrl: IUsrCtrl = {Fact_Id:Number(sessionStorage.getItem('fact')) , User_Id:Number(sessionStorage.getItem('Id')),
      
      Dept_Id:Number(sessionStorage.getItem('appId')),Tran_Date:new Date(), Tran_Time:new Date(),
  
      Win_Name:'شاشة قائمة طلبات الشراء',Action:' رفض اعتمادرئيس قطاعات المصانع',Order:String(id),Order_Type:tp,
  
  
        Ip_Address: x.ip
      };
     
      // console.log(ctrl.Order);
      this.usrCtrl.addCtrl(ctrl).subscribe(
        next => {},
        error=>{}
        
  
      );
          
      // console.log(Response);
     });
      this.toastr.success("تم رفض اعتماد رئيس قطاعات المصانع");
     const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      await sleep(1000);
      window.location.reload();
    
    
    },
     error=>{    this.toastr.error("لم يتم رفض رئيس قطاعات المصانع")  } );
   
   
     }


  // ================================================================================================
   }
  

   openDialog2(fact:any,Season:any,Type:any,Ord_Id:any): void{

  


    const dialogRef = this.dialog.open(OrderBuyComponent, {

      data: {Fact: fact, Seson: Season, Type:Type,Id:Ord_Id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });



  }


  highlight(row:any){
    this.selectedRowIndex=row.ord_Id;
  }

  }
