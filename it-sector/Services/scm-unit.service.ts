import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SCMUnitService {

  constructor(private http:HttpClient) {  }

  getByID(uId:any){
    return this.http.get(environment.apiUrl+"SCM_Unit/GetId?UId="+uId); 
  }
  //=============================================
  getAll(){
    return this.http.get(environment.apiUrl+"SCM_Unit"); 
  }

  //===============================================================================================

  addNewUnit(userObj:any){
    return this.http.post(environment.apiUrl+"SCM_Unit/",userObj).pipe( map((res:any )=>{ 

      if(res){      console.log(res);     }   })  ) ;

  }
  //========================================================================

}
