import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({

  providedIn: 'root'

})

export class OldHistoryService {


  constructor(private http:HttpClient) { 



  }
  GetHistoryItmById(FId:any,itmId:any){

    // const token = sessionStorage.getItem("grToken"); // Replace with your actual authentication token
    
    // const token1 = sessionStorage.getItem("usrToken"); // Replace with your actual authentication token
    
   
    // const headers = new HttpHeaders({

    //   'Authorization': `Bearer ${token1}`

    // });

    

  
    return this.http.get(environment.apiUrl+"Old_History/GetItemId?Fact="+FId+"&ItemId="+itmId);
  
  
  }
  
}
