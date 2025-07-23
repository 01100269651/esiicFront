import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrdTypesService {
  constructor(private http:HttpClient ) { }


//===============================================

getAllTypes(){

  return this.http.get(environment.apiUrl+"SCM_Order_Types");



}


   //========================================
 GetOrdById(Id:any){
  return this.http.get(environment.apiUrl+"SCM_Order_Types/GetId?TypeId="+Id);


}

//========================
addTyp(userObj:any){

  // console.log(userObj);

return this.http.post(environment.apiUrl+"SCM_Order_Types/",userObj).pipe( map((res:any )=>{ 

if(res){      console.log(res);     }   })  ) ;
}
//===========================================================
updType(userObj:any){
return this.http.put(environment.apiUrl+"SCM_Order_Types/",userObj)
.pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;

}
//==========================================================
delType(Id:any){
return this.http.delete(environment.apiUrl + "SCM_Order_Types?Id=" + Id).pipe(
map((res: any) => {

if (res) {
  console.log(res);
}
}));
}





}
