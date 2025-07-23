import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor(private http:HttpClient) { }

  GetDeptById(Id:any){  return this.http.get(environment.apiUrl+"SCM_Dept/GetId?DeptId="+Id);
 }
 ///=====================================================================

 getAllDepts(){

  return this.http.get(environment.apiUrl+"SCM_Dept");


 }
 
 //========================
 addDept(userObj:any){
 
   // console.log(userObj);
 
 return this.http.post(environment.apiUrl+"SCM_Dept/",userObj).pipe( map((res:any )=>{ 
 
 if(res){      console.log(res);     }   })  ) ;
 }
 //===========================================================
 updDept(userObj:any){
 return this.http.put(environment.apiUrl+"SCM_Dept/",userObj)
 .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 
 }
 //==========================================================
 delDept(Id:any){
 return this.http.delete(environment.apiUrl + "SCM_Dept?id=" + Id).pipe(
 map((res: any) => {
 
 if (res) {
   console.log(res);
 }
 }));
 }


}
