import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  ///=========================================
  AddNewItem(userObj:any)
  {
    // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"SCM_Item/",userObj).pipe( map((res:any )=>{ 

        if(res){      console.log(res);     }   })  ) ;

  
}
//================================================================================

GetItem(Id:any){

  return this.http.get(environment.apiUrl+"SCM_Item/GetId?ItemId="+Id);


}
//==============================================================
UpdItem(userObj:any)
{


return this.http.put(environment.apiUrl+"SCM_Item/",userObj)

.pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
 

}

 //=============================================

 DelItem(Id:any){
  return this.http.delete(environment.apiUrl+"SCM_Item?Id="+Id).pipe(
 
    map((res:any )=>{
   
      if(res){
   
        
       console.log(res);
  
  
       // localStorage.setItem("grId",res.id);
  
       // localStorage.setItem("grName",res.appName);
  
       // localStorage.setItem("grToken",res.accessToken);
   
      }
   
   
    })
   
   
   
   )     ;


 }


 //========================================================================

getItemBalance(Fact:any,Item:any){

  return this.http.get(environment.apiUrl+"SCM_Item/GetFactBalance?Fact="+Fact+"&ItemId="+Item);


}

//============================================================================================

getSearchResults(Id:any,Name:any){

  return this.http.get(environment.apiUrl+"SCM_Item/GetItemByNameOrId?ItemCode="+Id+"&ItemName="+Name);


}


}
