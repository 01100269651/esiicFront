import { CanActivateFn } from '@angular/router';

export const authDmGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('grName')=='مراقبة المخزون'
   && sessionStorage.getItem('grId')=='1')
    {return true;}
    else
    return false;
};
