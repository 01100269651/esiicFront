import { CanActivateFn, Router } from '@angular/router';


export const authItGuard: CanActivateFn = (route, state  ) => {
  if(sessionStorage.getItem('grName')=='IT'
   && sessionStorage.getItem('grId')=='0')
    {return true;}
    else{
     
      return false;
 
    }
};
