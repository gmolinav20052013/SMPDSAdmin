import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let currentToken = {token: ''};

  //  console.log(currentToken);
  //  console.log(sessionStorage.currentToken);

    if (sessionStorage.currentToken != null) {

     // console.log('**** JwtInterceptorService ******');

      // console.log(sessionStorage.currentToken);

       currentToken = JSON.parse(sessionStorage.currentToken);

     //  console.log(currentToken);

    }

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + currentToken.token
      }}
      );

    return next.handle(request);

  }
}
