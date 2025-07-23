import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SCMRoleService {

  constructor(private http:HttpClient) { }

  GetRoles( )
  {
      return this.http.get(environment.apiUrl+"SCM_Role/");
 }
}
