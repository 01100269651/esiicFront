import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserContrlService {
  

  constructor(private http:HttpClient) {





   }

   
   addCtrl(userObj:any){

    return this.http.post(environment.apiUrl+"SCM_User_Control/",userObj).pipe( map((res:any )=>{ 

      if(res){      console.log(res);     }   })  ) ;

   }

   public getIPAddress()  
   {  
     return this.http.get("https://api.ipify.org/?format=json");  
   }  
 
   getUserInfo(user:any){

    console.log(user);
    return this.http.get(environment.apiUrl+"SCM_User_Control/GetUser?UsrId="+user);



   }

   getOrderLog(orderType:any,orderId:any){

    var fact= sessionStorage.getItem('fact');

    return this.http.get(environment.apiUrl+"SCM_User_Control/GetOrderLog?Fact_Id="+fact+"&Type="+orderType+"&OrdId="+orderId);



   }

}
