import { Injectable } from '@angular/core';
import { IAppUser } from '../Models/iapp-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor( private http:HttpClient ) {


   }

   UserLogin(userObj:any)
   {
   return this.http.post(environment.apiUrl+"SCM_Login_User/User_Login/",userObj).pipe(

    map((res:any )=>{

      if(res){

        
       console.log(res);
       sessionStorage.setItem("Id",res.id);
       sessionStorage.setItem("userName",res.userName);
       sessionStorage.setItem("usrToken",res.accessToken);
       sessionStorage.setItem("appId",res.appId);
       sessionStorage.setItem("fact",res.fact);
       sessionStorage.setItem("role",res.role);
      
       

      }




    })



   )
   
   ;
   //  return this.AppListId.filter(x=>x.Id == userObj.App_Id && x.Password == userObj.App_Password  ) ;



   
  
  
  
  }

  UserSignUp(userObj:any )
  {
console.log(userObj);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'image/*');
    
    // userObj.append('SignImage', fileData.get('SignImage'));
  return this.http.post(environment.apiUrl+"SCM_Login_User/Register/",userObj,{headers}).pipe(

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
  //  return this.AppListId.filter(x=>x.Id == userObj.App_Id && x.Password == userObj.App_Password  ) ;



  
 
 
 
 }
 //////////////////////////////////////////////////////////
 UserUpdate(userObj:any) 

 {
 
   const headers = new HttpHeaders({

     'Content-Type': 'application/json'

   });

 return this.http.put(environment.apiUrl+"SCM_Login_User/",userObj ,{headers}).pipe(
 
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


 ///////////////////////////////////////////////////

 UserById(userObj:any){
  // 

  return this.http.post(environment.apiUrl+"SCM_Login_User/GetId/",userObj);

 }


 ///========================================================================

 DelUsr(userObj:any){

  return this.http.delete(environment.apiUrl+"SCM_Login_User/",userObj).pipe(
 
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


 //////////////////////////////////================================

 getAllUser(){
  return this.http.get(environment.apiUrl+"SCM_Login_User");

  

 }
 





}
