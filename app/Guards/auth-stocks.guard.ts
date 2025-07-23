import { CanActivateFn } from '@angular/router';

export const authStocksGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('grName')=='المخزن العام'
  && sessionStorage.getItem('grId')=='3')
   {return true;}
   else
   return false;
};
