import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { API_URL_TOKEN } from '../tokens/api.token';
import { ERROR_RETRY_TOKEN } from '../tokens/error.token';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorHandlerService {
  static count = 1;
  i: number;

  constructor(
    @Inject(API_URL_TOKEN) private apiUrl: string,
    @Inject(ERROR_RETRY_TOKEN) private errorRetry: string,
  ) {
    this.i = ErrorHandlerService.count;
    ErrorHandlerService.count++;

    console.log(`new ErrorHandlerService(${this.i})(${this.apiUrl}) w/ ${this.errorRetry}`);
  }

  getResult(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`used ErrorHandler(${this.i})(${this.apiUrl})`);
    return next.handle(request);
  }
}
