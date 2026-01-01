import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IntrcptrTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const excludedUrl = 'https://api.ipify.org/?format=json'; // Replace with the URL of the request you want to exclude from interception

    // Check if the request URL matches the excluded URL
    if (request.url.includes(excludedUrl)) {
      // Pass the request directly to the HTTP handler without modifying it
      return next.handle(request);
    }
  
    const token = sessionStorage.getItem("usrToken"); // Replace with your actual authentication token
    let headers = request.headers;
  
    // Check if the request body contains an image
    if (request.body instanceof FormData && request.body.has('SignImage')) {

      headers = headers.set('Content-Type', 'image/*');

      headers = headers.set('enctype', 'multipart/form-data');

    } else {

      headers = headers.set('Content-Type', 'application/json');

   
      // headers = headers.set('Access-Control-Allow-Origin','https://www.scm.erpesiic.com');
      headers = headers.set('Access-Control-Allow-Origin','https://scm.erpesiic.com');
       
      //  headers = headers.set('Access-Control-Allow-Origin','https://localhost:4200');

      // headers = headers.set('Cache-Control','no-cache');
      

    }
  
    // Add the authorization header
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
  
    // Clone the request and set the new headers
    const modifiedRequest = request.clone({ headers });
  
    // Pass the modified request to the next interceptor or to the HTTP handler
    return next.handle(modifiedRequest);
  }
}
