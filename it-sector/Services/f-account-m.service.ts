import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FAccountMService {

  constructor(private http:HttpClient) { }
  ///=========================================
  AddNewAccount(userObj:any)
  {
    // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"F_Account_m/",userObj).pipe( map((res:any )=>{ 

        if(res){      console.log(res);     }   })  ) ;

  
}
//================================================================================

GetAccountById(Id:any){

  return this.http.get(environment.apiUrl+"F_Account_m/GetId?AccId="+Id);


}
//==============================================================
UpdItem(userObj:any)
{


return this.http.put(environment.apiUrl+"F_Account_m/",userObj)

.pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 

}

 //=============================================
 DelItem(Id:any){
  return this.http.delete(environment.apiUrl+"F_Account_m?Id="+Id).pipe(
 
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





}
