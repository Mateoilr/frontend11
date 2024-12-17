import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheoryshopService {
  private url = 'http://localhost:3000';  // URL to


  constructor(private http: HttpClient) { }

  gettheory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/theory`);
  }
  createtheory<T>(theory: T): Observable<any> {
    return this.http.post<any>(`${this.url}/theory`, theory);
  }
  deletetheory(id: string): Observable<void> {
    return this.http.delete<any>(`${this.url}/theory/${id}`);
  }
  updatetheory<T>(id: string, theory: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/theory/${id}`, theory);
  }
}
