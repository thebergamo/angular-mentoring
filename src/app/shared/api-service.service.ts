import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private uri: string,
  ) { }

  public list<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${this.uri}`)
      .pipe(
        catchError(this.handleError(`list: ${this.uri}`, []))
      );
  }

  public read<T>(id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${this.uri}/${id}`)
      .pipe(
        catchError(this.handleError<T>(`read: ${this.uri} - id: ${id}`))
      );
  }

  public create<T>(payload: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${this.uri}`, payload)
      .pipe(
        catchError(this.handleError<T>(`create: ${this.uri}`))
      );
    }

  public update<T>(id: string, payload: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${this.uri}`, payload)
      .pipe(
        catchError(this.handleError<T>(`update: ${this.uri} - id: ${id}`))
      );
  }

  public destroy<T>(id: string): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${this.uri}`)
      .pipe(
        catchError(this.handleError(`delte: ${this.uri} - id: ${id}`))
      );
  }


  private getHttpOptions(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.warn(`Operation failed: ${operation}`);
      console.error(error);

      return of(result as T);
    };
  }
}
