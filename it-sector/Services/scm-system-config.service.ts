import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ScmSystemConfigService {

  constructor(private http:HttpClient) {


   }

   GetSysById(Id:any){
    return this.http.get(environment.apiUrl+"SCM_System/GetId?SysId="+Id);
  
  
  }
  //===========================================================
  updSystemInfo(userObj:any){
    return this.http.put(environment.apiUrl+"SCM_System/",userObj)
  
    .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
     
  
  
  }

  ////==================================================================================


  getFinialYear(){
    return this.http.get(environment.apiUrl+"SCM_System/GetFinYear");

  }

  //=========================================




}
