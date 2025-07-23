import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SupOrdStatesService {

  constructor(private http:HttpClient) { }

  GetStatById(Id:any){  return this.http.get(environment.apiUrl+"SCM_Supply_State/GetId?StatId="+Id);
 }
 
 //========================
 addState(userObj:any){
 
   // console.log(userObj);
 
 return this.http.post(environment.apiUrl+"SCM_Supply_State/",userObj).pipe( map((res:any )=>{ 
 
 if(res){      console.log(res);     }   })  ) ;
 }
 //===========================================================
 updState(userObj:any){
 return this.http.put(environment.apiUrl+"SCM_Supply_State/",userObj)
 .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 
 }
 //==========================================================
 delState(Id:any){
 return this.http.delete(environment.apiUrl + "SCM_Supply_State?Id=" + Id).pipe(
 map((res: any) => {
 
 if (res) {
   console.log(res);
 }
 }));
 }
 
}
