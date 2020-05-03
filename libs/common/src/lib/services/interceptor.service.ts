import { Injectable, Injector, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL_TOKEN } from '../tokens/api.token';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class InterceptorService {
  errorHandler: ErrorHandlerService;

  constructor(
    private injector: Injector,
    @Inject(API_URL_TOKEN) private apiUrl: string,
  ) {
    this.errorHandler = this.injector.get(ErrorHandlerService);

    console.log(`new InterceptorService(${this.apiUrl}) w/ errorHandler(${this.errorHandler.i})`);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.errorHandler.getResult(request, next);
  }
}
