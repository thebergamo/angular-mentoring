import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = environment.apiUrl;
  private httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
  ) { }

  public list<T>(uri: string, queryOptions: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${uri}${queryOptions}`)
      .pipe(
        catchError(this.handleError(`list: ${uri}`, []))
      );
  }

  public read<T>(uri: string, id: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${uri}/${id}`)
      .pipe(
        catchError(this.handleError<T>(`read: ${uri} - id: ${id}`))
      );
  }

  public create<T>(uri: string, payload: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${uri}`, payload, this.httpOptions)
      .pipe(
        catchError(this.handleError<T>(`create: ${uri}`))
      );
    }

  public update<T>(uri: string, id: string, payload: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${uri}`, payload)
      .pipe(
        catchError(this.handleError<T>(`update: ${uri} - id: ${id}`))
      );
  }

  public destroy<T>(uri: string, id: string): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${uri}`)
      .pipe(
        catchError(this.handleError(`delte: ${uri} - id: ${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.warn(`Operation failed: ${operation}`);
      console.error(error);
      if (!result) {
        throw new Error('Operation failed');
      }

      return of(result as T);
    };
  }
}
