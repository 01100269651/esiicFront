import { Injectable } from '@angular/core';
import { IAppGroup } from '../Models/iapp-group';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class AuthGrpService {
 //AppListId:IAppGroup[];
 IApp:any[]=[];
 id!:number;
 app_Name!:string;

  constructor( private http:HttpClient ) {

 
    // this.AppListId=[
    //   {Id:0,Name:"نظم المعلومات",Password:"00"},
    //   {Id:1,Name:"مراقبة المخزون",Password:"10"},
    //   {Id:2,Name:"المشتريات",Password:"20"},
    //   {Id:3,Name:"المخزن العام",Password:"30"},
    //   {Id:4,Name:"حسابات المخازن",Password:"40"},
    //   {Id:5,Name:"الصيانة الوقائية",Password:"50"}


    // ];
   }

   GroupLogin(userObj:any)
   {
   return this.http.post(environment.apiUrl+"SCM_Login_App/App_Login/",userObj).pipe(

    map((res:any )=>{

      if(res){

        
       console.log(res);
       sessionStorage.setItem("grId",res.id);
       sessionStorage.setItem("grName",res.appName);
       sessionStorage.setItem("grToken",res.accessToken);
       sessionStorage.setItem("FinYear",res.seson);

       

      }




    })



   )
   
   ;
   //  return this.AppListId.filter(x=>x.Id == userObj.App_Id && x.Password == userObj.App_Password  ) ;



   
  
  
  
  }


  GroupSignUp(userObj:any)
  {
  return this.http.post(environment.apiUrl+"SCM_Login_App/Register/",userObj).pipe(

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

GrUpdate(userObj:any)
{

  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
return this.http.put(environment.apiUrl+"SCM_Login_App/",userObj ,{headers}).pipe(

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



 GrpById(userObj:any){

  return this.http.post(environment.apiUrl+"SCM_Login_App/GetId/",userObj);

 }
//=============================================================================

getAllApps(){
  return this.http.get(environment.apiUrl+"SCM_Login_App");


}



}
