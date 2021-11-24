import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private base_url = 'https://localhost:44301/api';

  constructor(private http: HttpClient) {}

  get(path: string) {
    return this.http.get(`${this.base_url}${path}`);
  }
}
