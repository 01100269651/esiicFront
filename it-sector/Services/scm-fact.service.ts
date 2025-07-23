import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SCMFactService {

  constructor(private http:HttpClient) { }
//==================================================================
 checkFactNo(Fact: number):boolean {
  const locFact = parseInt(sessionStorage.getItem('fact') || '0');
  return Fact >= locFact && Fact < locFact + 5;
}

//==============================================
getAll(){
  

  return this.http.get(environment.apiUrl+"SCM_Fact/GetAll");


}



//===================================================================
getAllFact(){
  var ff=sessionStorage.getItem('fact');

  return this.http.get(environment.apiUrl+"SCM_Fact?Fact="+ff);


}

//===============================================
  AddFact(userObj:any)
  {
    // console.log(userObj);
  
  return this.http.post(environment.apiUrl+"SCM_Fact/",userObj).pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
  
}

 //==========================================================================================

 UpdFact(userObj:any)
  {
    const headers = new HttpHeaders({

      'Content-Type': 'application/json'
 
    });

  return this.http.put(environment.apiUrl+"SCM_Fact/",userObj,{headers})
  
  .pipe( map((res:any )=>{     if(res){      console.log(res);     }   })  ) ;
   }


   //===================================================================================================================================
   //==========================================================================================================================================

   GetFactById(Id:any){

    console.log(Id);
   
    const headers = new HttpHeaders({

      'Content-Type': 'application/json'
 
    });

    return this.http.get(environment.apiUrl+"SCM_Fact/GetId?Id="+Id);




   }
//===============================================================================
   delFact(Id:any){

    return this.http.delete(environment.apiUrl+"SCM_Fact?Id="+Id).pipe(
 
      map((res:any )=>{
     
        if(res){
     
          
         console.log(res);
    
    
         // localStorage.setItem("grId",res.id);
    
         // localStorage.setItem("grName",res.appName);
    
         // localStorage.setItem("grToken",res.accessToken);
     
        }
     
     
      })
     
     
     
     )
     
     ;
  
   }
   }





