import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class InterceptorService {

  constructor() {
    console.log('new InterceptorService');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      switchMap((resp: HttpResponse<any>) => {
        console.log(resp)
        return of(resp);
      }),
    );
  }
}
