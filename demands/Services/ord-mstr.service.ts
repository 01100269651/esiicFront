import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrdMstrService {


  constructor(private http:HttpClient) { }
///////////////////////////////////////////////
///////=======================================

GetSignedList(){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  var id=sessionStorage.getItem('Id');

  return this.http.get(environment.apiUrl+"SCM_Order/GetSigned?Fact="+ff+"&Ses="+ses+"&UserId="+id);

}

//===========================================================

getOrdAllItms(FId:any,Ses:any,typ:any,Id:any){
  return this.http.get(environment.apiUrl+"SCM_Order_Item/?Fact="+FId+"&Seson="+Ses+"&Type="+typ+"&OrdId="+Id);


}
 //========================================
 GetOrdById(FId:any,Ses:any,typ:any,Id:any){
  return this.http.get(environment.apiUrl+"SCM_Order/GetId?Fact="+FId+"&Seson="+Ses+"&Type="+typ+"&OrdId="+Id);


}
//=======================================================================

GetOrdByFact(Fact:any,Ses:any){
  return this.http.get(environment.apiUrl+"SCM_Order/GetNotSignedIC?Fact="+Fact+"&Ses="+Ses+"&UserId="+sessionStorage.getItem('Id'));


}

  //========================

  addOrder(userObj:any){

        // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"SCM_Order/",userObj).pipe( map((res:any )=>{ 

    if(res){      console.log(res);     }   })  ) ;



  }
  //===========================================================
updOrd(userObj:any){
  return this.http.put(environment.apiUrl+"SCM_Order/",userObj)

  .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
   


}

//==========================================================
delOrd(FId:any,Ses:any,typ:any,Id:any){
 
  return this.http.delete(environment.apiUrl+"SCM_Order?Fact="+FId+"&Seson="+Ses+"&Type="+typ+"&OrdId="+Id).pipe(
 
    map((res:any )=>{
   
      if(res){
   
        
       console.log(res);
  
  
    
   
      }
   
   
    }) )   ;


 }

 //================================================================================================
 getNotSignedIc(Fact:any,Ses:any){
  return this.http.get(environment.apiUrl+"SCM_Order/GetNotSignedIC?Fact="+Fact+"&Seson="+Ses);
 }

 //================================================================================================
 SignOkIc(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignIc",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }
 SignNotOkIc(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignIc",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }
//============================================================================
// SignOkGnrlStks
SignOkGnrlStks(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignGnrlStks",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }

 SignNotOkGnrlStks(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignGnrlStks",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }
 //-------------------------------------------------------------------------------
//  PutSignCalStks
SignOkCalStks(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignCalStks",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }

 SignNotOkCalStks(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignCalStks",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }


 //0000000000000000000000000000000000000000000000000000000000000
//  PutSignCalStks
SignOkEng(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignEng",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }

 SignNotOkEng(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignEng",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }

 //==========================================================================================================

 SignOkReview(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignRev",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }

 SignNotOkReview(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;
  return this.http.put(environment.apiUrl+"SCM_Order/PutSignRev",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
  }
///////////////////////////////////////////////////////////////////////////////////
//مدير عام الشئون المالية
SignOkFin(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;

  // let output: JSON;
  // let obj: any = 
  // {
  //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
  
  // };
  
  // output = <JSON>obj;
  
  // console.log(output)


  return this.http.put(environment.apiUrl+"SCM_Order/PutSignFin",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 }

 SignNotOkFin(ty:any,id:any){
  var ff= sessionStorage.getItem('fact');
  var ses=sessionStorage.getItem('FinYear');
  let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
  let NewOrd: JSON;
  NewOrd = <JSON> obj;
  return this.http.put(environment.apiUrl+"SCM_Order/PutSignFin",NewOrd)
   .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
  }


  ///===============================================================================================

  SignOkFactCEO(ty:any,id:any){
    var ff= sessionStorage.getItem('fact');
    var ses=sessionStorage.getItem('FinYear');
    let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
    let NewOrd: JSON;
    NewOrd = <JSON> obj;
  
    // let output: JSON;
    // let obj: any = 
    // {
    //   'Fact_Id':this.data.Fact,'Type':Type ,'Season':Season,'Item_No':Item_No,'Ord_Id':this.data.Id,'Quantity':Quantity
    
    // };
    
    // output = <JSON>obj;
    
    // console.log(output)
  
  
    return this.http.put(environment.apiUrl+"SCM_Order/PutSignFactCEO",NewOrd)
     .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
   }
  
   SignNotOkFactCEO(ty:any,id:any){
    var ff= sessionStorage.getItem('fact');
    var ses=sessionStorage.getItem('FinYear');
    let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
    let NewOrd: JSON;
    NewOrd = <JSON> obj;
    return this.http.put(environment.apiUrl+"SCM_Order/PutSignFactCEO",NewOrd)
     .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
    }
    ///===============================================================================================

    SignOkFactViceCEO(ty:any,id:any){
      var ff= sessionStorage.getItem('fact');
      var ses=sessionStorage.getItem('FinYear');
      let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':true}
      let NewOrd: JSON;
      NewOrd = <JSON> obj;
    
     
    
    
      return this.http.put(environment.apiUrl+"SCM_Order/PutSignFactViceCEO",NewOrd)
       .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
     }
    
     //---------------------------------------------------------------------
     
     SignNotOkFactViceCEO(ty:any,id:any){
      var ff= sessionStorage.getItem('fact');
      var ses=sessionStorage.getItem('FinYear');
      let obj:any={'fact_Id':ff,'season':ses,'type':ty,'ord_Id':id,'sign':false}
      let NewOrd: JSON;
      NewOrd = <JSON> obj;
      return this.http.put(environment.apiUrl+"SCM_Order/PutSignFactViceCEO",NewOrd)
       .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
      }
    
  



      //============================================================

      //get Repeated Ordrs

      getRepeatedOrdrs(fact:any,ses:any,itm:any)
      {
        return this.http.get(environment.apiUrl+"SCM_Order_Item/GetRepeatedItmsOrdrs?Fact="+fact+"&Seson="+ses+"&Itm_No="+itm);


      }



 
}
