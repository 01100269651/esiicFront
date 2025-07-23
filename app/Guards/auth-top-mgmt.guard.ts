import { CanActivateFn } from '@angular/router';

export const authTopMgmtGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('grName')=='TopManagement'
  && sessionStorage.getItem('grId')=='6')
   {return true;}
   else
   return false;
};
