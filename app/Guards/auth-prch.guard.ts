import { CanActivateFn } from '@angular/router';

export const authPrchGuard: CanActivateFn = (route, state) => {

  if(sessionStorage.getItem('grName')=='المشتريات'
  && sessionStorage.getItem('grId')=='2')
   {return true;}
   else
   return false;


};
