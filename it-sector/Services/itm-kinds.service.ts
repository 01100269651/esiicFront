import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItmKindsService {
  
  constructor(private http:HttpClient) { }

  ///===================================================
  getAll(){

    return this.http.get(environment.apiUrl+"SCM_Item_Kind");
  
  
   }
  



  ///======================================================


}
