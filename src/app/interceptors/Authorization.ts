import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
  } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer "+ token)
    })
    return next.handle(newRequest).pipe(
        catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          // Handle HTTP errors
          if (err.status === 401) {
            // Specific handling for unauthorized errors         
            console.error('Unauthorized request:', err);
            // You might trigger a re-authentication flow or redirect the user here
          } else {
            // Handle other HTTP error codes
            console.error('HTTP error:', err);
          }
        } else {
          // Handle non-HTTP errors
          console.error('An error occurred:', err);
        }
  
        // Re-throw the error to propagate it further
        return throwError(() => err); 
      }))
  }
}