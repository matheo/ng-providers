import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { API_URL_TOKEN } from '../tokens/api.token';

@Injectable()
export class HttpService extends HttpClient {
  constructor(
    httpHandler: HttpHandler,
    @Inject(API_URL_TOKEN) private apiUrl: string
  ) {
    super(httpHandler);

    console.log(`HttpService instantiated with ${this.apiUrl}`);
  }

  print() {
    return `HttpService API_URL: ${this.apiUrl}`;
  }
}
