import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http:HttpClient) { }

  //========================================
GetSoreById(Id:any){
  return this.http.get(environment.apiUrl+"SCM_Store/GetId?StoreId="+Id);

}
//==============================================================================
//GetIdFact
GetSoreByFactId(Fact:any,Id:any){
  return this.http.get(environment.apiUrl+"SCM_Store/GetIdFact?Fact="+Fact+"&StoreId="+Id);

}

/////////////////////////////////////////////////////////////////////

//GetIdFact
GetSoreAllFactId(){
  return this.http.get(environment.apiUrl+"SCM_Store");

}

//==========================================
GetAllStore(){
  return this.http.get(environment.apiUrl+"SCM_Store/");

}

  //========================
  addStore(userObj:any){

        // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"SCM_Store/",userObj).pipe( map((res:any )=>{ 

    if(res){      console.log(res);     }   })  ) ;



  }
  //===========================================================
updStore(userObj:any){
  return this.http.put(environment.apiUrl+"SCM_Store/",userObj)

  .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
   


}
//==========================================================
delStore(Id:any){
  return this.http.delete(environment.apiUrl+"SCM_Store?Id="+Id).pipe(
 
    map((res:any )=>{
   
      if(res){
   
        
       console.log(res);
  
  
    
   
      }
   
   
    }) )   ;


 }
//=============================

}
