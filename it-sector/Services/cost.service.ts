import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CostService {


  constructor(private http:HttpClient) { }
///////////////////////////////////////////////




///////=======================================

getAllCosts(){
  return this.http.get(environment.apiUrl+"SCM_Cost");


}
 //========================================
 GetCostById(Id:any){
  return this.http.get(environment.apiUrl+"SCM_Cost/GetId?CostId="+Id);


}


  //========================

  addCost(userObj:any){

        // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"SCM_Cost/",userObj).pipe( map((res:any )=>{ 

    if(res){      console.log(res);     }   })  ) ;



  }
  //===========================================================
updCost(userObj:any){
  return this.http.put(environment.apiUrl+"SCM_Cost/",userObj)

  .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
   


}

//==========================================================
delCost(Id:any){
  return this.http.delete(environment.apiUrl+"SCM_Cost?Id="+Id).pipe(
 
    map((res:any )=>{
   
      if(res){
   
        
       console.log(res);
  
  
    
   
      }
   
   
    }) )   ;


 }



//==========================
////////////////////////////////////////////////





}
