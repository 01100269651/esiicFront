import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrdItmService {

  constructor(private http:HttpClient) { }

  /////////////////////////////////////////////********************* */&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  // GetId(short? Fact, int? Seson, string Type, int? OrdId, string Itm)
 GetOrdItmById(FId:any,Ses:any,typ:any,oId:any,itmId:any){

  
  return this.http.get(environment.apiUrl+"SCM_Order_Item/GetId?Fact="+FId+"&Seson="+Ses+"&Type="+typ+"&OrdId="+oId+"&Itm="+itmId);


}

/////================================================================================********************************

getMaxShowId(fact:any,ses:any,type:any){

  return this.http.get(environment.apiUrl+"SCM_Order_Item/GetLastShowId?Fact="+fact+"&Seson="+ses+"&Type="+type);


}

//======================================================================================================
// PutShowId
putShowId(f:any,ses:any,typ:any,id:any,itm:any,show:any){

  return this.http.put(environment.apiUrl+"SCM_Order_Item/PutShowId?Fact="+f+"&Seson="+ses+"&Type="+typ+"&OrdId="+id+"&Itm="+itm
    +"&ShowId="+show,null
  )

  .pipe( map((res:any )=>{     if(res){     

    
    
    console.log(res);     }   })  ) ;
  
}


//===============================================================================================

addItem(userObj:any){
  // console.log(userObj);
return this.http.post(environment.apiUrl+"SCM_Order_Item/",userObj).pipe( map((res:any )=>{ 

if(res){      console.log(res);     }   })  ) ;
}
//////////******************************************************************* */******************************* */
updItm(userObj:any){
  return this.http.put(environment.apiUrl+"SCM_Order_Item/",userObj)

  .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
   }

//==========================================================
delItm(FId:any,Ses:any,typ:any,Id:any,itmId:any){
 
  return this.http.delete(environment.apiUrl+"SCM_Order_Item?Fact="+FId+"&Seson="+Ses+"&Type="+typ+"&OrdId="+Id+"&Itm="+itmId).pipe(
 
    map((res:any )=>{
   
      if(res){
   
        
       console.log(res);
  
  
    
   
      }
   
   
    }) )   ;


 }

 //=====================================================================
 updItmQty(userObj:any){
  return this.http.patch(environment.apiUrl+"SCM_Order_Item/UpdQty",userObj)

  .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
   }

   //==================================================

   getPricingOfferItms(){

    var fact=sessionStorage.getItem('fact');



    
    var show =sessionStorage.getItem('showId');


    return this.http.get(environment.apiUrl+"SCM_Order_Item/GetLastPricingOfferItems?Fact="+fact+"&OfferId="+show);



   }
 
   //================================================================================================
   //الأصناف المكررة

   getRepeatedInFact(){

    var FId=sessionStorage.getItem('fact');
    var Ses=sessionStorage.getItem('FinYear');


    return this.http.get(environment.apiUrl+"SCM_Order_Item/GetRepeatedInFact?Fact="+FId+"&Seson="+Ses);

   }


}
