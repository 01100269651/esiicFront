import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

//===========================================================
getItmMastr(factId:any,storeId:any,itemNo:any){

  return this.http.get(environment.apiUrl+"SCM_Master/GetId?Fact_Id="+factId+"&&StoreId="+storeId+"&&Itm_Id="+itemNo);


}
////////////////////////////////////////////////////////////////

addMaster(userObj:any){

  // console.log(userObj);

return this.http.post(environment.apiUrl+"SCM_Master/",userObj).pipe( map((res:any )=>{ 

if(res){      console.log(res);     }   })  ) ;



}

////////////////////////////////////////////////
delAddToMast(FId:any,SId:any,IId:any){

  return this.http.delete(environment.apiUrl+"SCM_Master?F_Id="+FId+"&SId="+SId+"&ItmId="+IId).pipe(
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

 //===================================================================
 UpdateMaster(fact:any , f_Date :any , e_Date :any){

  return this.http.put(environment.apiUrl+"SCM_Master/UpdMaster?Fact="+fact+"&FDate="+f_Date+"&EDate="+e_Date,null)

  .pipe( map((res:any )=>{     if(res){      console.log(res); 
    
      }   })  ) ;

}

 //==================================================================================

 //الأجماليات العامة للمخازن
 getTotalSumes(factId:any){

  return this.http.get(environment.apiUrl+"SCM_Master/GetTotalStores?Fact_Id="+factId);


 }


 //الأرصدة التفصيلية

 getDetailsBalances(factId:any,store_Id:any){

  return this.http.get(environment.apiUrl+"SCM_Master/GetDetailsStores?Fact_Id="+factId+"&&Store_Id="+store_Id);


 }



 //===========================)))))))))))))))))))))))))))))))))))))))))))))))) 

 getByItmId(itm_Id:any){
var factId= sessionStorage.getItem('fact');
  return this.http.get(environment.apiUrl+"SCM_Master/GetByItmId?Fact_Id="+factId+"&Itm_Id="+itm_Id);


 }

}


