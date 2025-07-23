import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MasterFactService {

  constructor(private http:HttpClient) { }

  addNew(userObj:any){

   //alert('');
   const requestOptions = {
    withCredentials: true
  };

   
    return this.http.post(environment.apiUrl+"MasterFact/Post1",userObj ,requestOptions).pipe( map((res:any )=>{ 

      if(res){      console.log(res);     }   })  ) ;
  }

  getItemsAllFacts(Item_Id:any){

    //alert('');
    
     return this.http.get(environment.apiUrl+"Master_Fact/GetItemId?ItemId="+Item_Id);
}
}