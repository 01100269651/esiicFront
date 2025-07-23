import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InSTOKService {

  constructor( private http:HttpClient) { }

///=====================

  AddNewTran(userObj:any)
  {
    // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"SCM_Transaction/",userObj).pipe( map((res:any )=>{ 

        if(res){      console.log(res);     }   })  ) ;

  
}
//================================================================================
GetAll(FId:any){

  return this.http.get(environment.apiUrl+"SCM_Transaction/GetFact?Fact="+FId);


}
//=====================
GetPage(fact:any,tranDate:any,trCode:any,Page:any){

  return this.http.get(environment.apiUrl+"SCM_Transaction/GetPage?Fact="+fact+"&TranDate="+tranDate+"&TranCd="+trCode+"&Page="+Page);


}



///////////////////////////
GetTranById(FId:any,Tran_Date:any,TranCd:any,Page:any,Ser:any){

  return this.http.get(environment.apiUrl+"SCM_Transaction/GetId?Fact="+FId+"&TranDate="+Tran_Date
 
  +"&TranCd="+TranCd+"&Page="+Page+"&Ser="+Ser);


}
//==============================================================
UpdTran(userObj:any)
{


return this.http.put(environment.apiUrl+"SCM_Transaction/",userObj)

.pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 

}

 //=============================================

 DelTran(FId:any,Tran_Date:any,TranCd:any,Page:any,Ser:any ){
  
  return this.http.delete(environment.apiUrl+"SCM_Transaction?FId="+FId+"&TDate="+Tran_Date
 
  +"&Code="+TranCd+"&Pag="+Page+"&Ser="+Ser).pipe(
 
    map((res:any )=>{
   
      if(res){
   
        
       console.log(res);
  
  
       // localStorage.setItem("grId",res.id);
  
       // localStorage.setItem("grName",res.appName);
  
       // localStorage.setItem("grToken",res.accessToken);
   
      }
   
   
    })
   
   
   
   )
   
   ;


 }


 //=======================================================================================================

 getItmBal(itemNo:string){

  return this.http.get(environment.apiUrl+"SCM_Transaction/GetItemBal?ItemId="+itemNo);



 }



 //========================================================================================

 getItemsDistributed(fact:any,tranCd:any,fDate:any,eDate:any){

  return this.http.get(environment.apiUrl+"SCM_Transaction/GetDistribution?Fact="+fact+"&T_Code="+tranCd+"&F_Date="+fDate+"&E_Date="+eDate);

 }

 ///////=================================================================================================

getInvoces(acc:any,fDate:any ,eDate:any){

  return this.http.get(environment.apiUrl+"SCM_Transaction/GetInvoices?Acc="+acc+"&F_Date="+fDate+"&E_Date="+eDate);


}




}
