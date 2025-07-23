import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterTableService {

  constructor(private http:HttpClient) { }

  UpdateMaster(fact:any , f_Date :any , e_Date :any){

    return this.http.put(environment.apiUrl+"SCM_Master/UpdMaster?Fact="+fact+"&FDate="+f_Date+"&EDate="+e_Date,null)
  
    .pipe( map((res:any )=>{     if(res){      console.log(res); 
      
        }   })  ) ;

  }


}
