import { CanActivateFn } from '@angular/router';

export const authStocksCalGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('grName')=='حسابات المخازن'
  && sessionStorage.getItem('grId')=='4')
   {return true;}
   else
   return false;
};
