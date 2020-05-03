import { Injectable, Inject } from '@angular/core';
import { API_URL_TOKEN } from '../tokens/api.token';

@Injectable({
  providedIn: 'root',
})
export class TreeShakeableService {
  constructor(
    @Inject(API_URL_TOKEN) private apiUrl: string
  ) {
    console.log(`new TreeShakeableService(${this.apiUrl})`);
  }

  print() {
    return `TreeShakeableService API_URL: ${this.apiUrl}`;
  }
}
