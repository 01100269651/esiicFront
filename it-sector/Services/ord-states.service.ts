import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdStatesService {

  constructor(private http:HttpClient) { }

//////////////////////////////////////////////////////////////////
getAllStates(){

  return this.http.get(environment.apiUrl+"SCM_States");

}

  ////////////////////////////////////////////////////////////////////////////////

 GetStatById(Id:any){  return this.http.get(environment.apiUrl+"SCM_States/GetId?StatId="+Id);
}

//========================
addState(userObj:any){

  // console.log(userObj);

return this.http.post(environment.apiUrl+"SCM_States/",userObj).pipe( map((res:any )=>{ 

if(res){      console.log(res);     }   })  ) ;
}
//===========================================================
updState(userObj:any){
return this.http.put(environment.apiUrl+"SCM_States/",userObj)
.pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;

}
//==========================================================
delState(Id:any){
return this.http.delete(environment.apiUrl + "SCM_States?Id=" + Id).pipe(
map((res: any) => {

if (res) {
  console.log(res);
}
}));
}


}
