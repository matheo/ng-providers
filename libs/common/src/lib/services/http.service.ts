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

    console.log(`new HttpService(${this.apiUrl})`);
  }

  name() {
    return super.get(`/assets/${this.apiUrl}.json`);
  }

  print() {
    return `HttpService API_URL: ${this.apiUrl}`;
  }
}
