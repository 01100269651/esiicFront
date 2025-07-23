import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {


  
  constructor(private http:HttpClient) { }

 //========================================
 GetSupById(Id:any){
  return this.http.get(environment.apiUrl+"SCM_Supplier/GetId?SupId="+Id);
}
  //========================
  addSup(userObj:any){

        // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"SCM_Supplier/",userObj).pipe( map((res:any )=>{ 

    if(res){      console.log(res);     }   })  ) ;
  }
  //===========================================================
updSup(userObj:any){
  return this.http.put(environment.apiUrl+"SCM_Supplier/",userObj)
  .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;

}
//==========================================================
delSup(Id:any){
  return this.http.delete(environment.apiUrl + "SCM_Supplier?Id=" + Id).pipe(
    map((res: any) => {

      if (res) {
        console.log(res);
      }
    }));
}}
