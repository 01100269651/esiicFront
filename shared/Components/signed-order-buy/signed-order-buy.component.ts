import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { OrderBuyComponent } from '../order-buy/order-buy.component';
import { MatDialog } from '@angular/material/dialog';
import { OrdMstrService } from 'src/demands/Services/ord-mstr.service';
import { UserContrlService } from 'src/shared/Services/user-contrl.service';
import { ToastrService } from 'ngx-toastr';
import { IUsrCtrl } from 'src/shared/Interfaces/iusr-ctrl';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-signed-order-buy',
  templateUrl: './signed-order-buy.component.html',
  styleUrls: ['./signed-order-buy.component.css']
})
export class SignedOrderBuyComponent     {

  

  dataSource: any;

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //===================
 


  //=================================

  //==========================
  displayedColumns: string[] = ['fact_Name','main_Dept','ord_Date',
    'cause','ord_Id','type_Name' ];
  // ,'Store_Id','scM_Store.name','Tran_Date','Page','Ser','Cost_ID','scM_Item.name','Quantity','Exe_Rec_No','Exe_Rec_Date'];


  

    
   

  itms:any[]=[];
  fact:any="";
  isLoading:boolean=true;
  finYear:any="";
  isActive = false;

  Response:any[]=[];

 
  selectedRowIndex:any;
 

  @ViewChild(MatPaginator) paginator!:MatPaginator ;
   
  constructor(public dialog: MatDialog,private ordSer:OrdMstrService ,private usrCtrl:UserContrlService ,private toastr:ToastrService ){
   
  this.fact=sessionStorage.getItem("fact");
  
  
  this.finYear=sessionStorage.getItem("FinYear");

  this.isLoading=true;
 
    this.ordSer.GetSignedList().subscribe(
 
      (Response: any) => {
     
        
        this.isLoading=false;
        
       // this.itms= Response;

       this.dataSource = new MatTableDataSource(Response);
       this.dataSource.data = Response;
       this.dataSource.length = Response.length;

       this.isLoading=false;
       try{
        // if (this.paginator && this.dataSource) {
          this.dataSource.paginator = this.paginator;
        
       }
       catch{
        alert("alert setting paginator")
       }
        
       
      //  this.dataSource.paginator = this.paginator; // Connect the paginator here
        // const dataSource = new MatTableDataSource(Response);
        // dataSource.paginator = this.paginator;
        // // console.log(dataSource);
        // // this.isLoading=false;
        // dataSource.data=Response;
  

  
      },
      
      error => {  
        console.log(error); // Print the error object to the console
        this.isLoading=false;
   
    
      }
  
     
    );
   
  


  }


  //================================


  //===================================
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

      data: {Fact: fact, Seson: Season, Type:Type,Id:Ord_Id,sign:1},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });



  }



}
