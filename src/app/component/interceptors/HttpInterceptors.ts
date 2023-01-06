import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.router.url === '/auth') {
      return next.handle(httpRequest);
    }
    const token = localStorage.getItem('token')!;
    return next.handle(httpRequest.clone({ setHeaders: { 'x-token': token } }));
  }
}
