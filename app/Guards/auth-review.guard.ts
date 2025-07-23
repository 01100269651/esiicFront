import { CanActivateFn } from '@angular/router';

export const authReviewGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('grName')=='المراجعة'
  && sessionStorage.getItem('grId')=='7')
   {return true;}
   else
   return false;
};
