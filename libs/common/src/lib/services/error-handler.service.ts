import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { API_URL_TOKEN } from '../tokens/api.token';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorHandlerService {
  static count = 1;
  i: number;

  constructor(
    @Inject(API_URL_TOKEN) private apiUrl: string
  ) {
    this.i = ErrorHandlerService.count;
    ErrorHandlerService.count++;

    console.log(`new ErrorHandlerService(${this.apiUrl}) w/ ${this.i}`);
  }

  getResult(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(`ErrorHandler(${this.i}).getResult`);
    return next.handle(request);
  }
}
