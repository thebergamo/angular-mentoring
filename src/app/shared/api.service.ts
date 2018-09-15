import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoaderOverlayComponent } from './loader-overlay/loader-overlay.component';
import { LoaderOverlayService } from './loader-overlay.service';

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
    private loaderService: LoaderOverlayService,
  ) { }

  public list<T>(uri: string, queryOptions: string): Observable<T[]> {
    this.loaderService.showLoader();

    return this.http.get<T[]>(`${this.baseUrl}/${uri}${queryOptions}`)
      .pipe(
        tap(() => this.loaderService.hideLoader()),
        catchError(this.handleError(`list: ${uri}`, []))
      );
  }

  public read<T>(uri: string, id: any): Observable<T> {
    this.loaderService.showLoader();

    return this.http.get<T>(`${this.baseUrl}/${uri}/${id}`)
      .pipe(
        tap(() => this.loaderService.hideLoader()),
        catchError(this.handleError<T>(`read: ${uri} - id: ${id}`))
      );
  }

  public create<T>(uri: string, payload: any): Observable<T> {
    this.loaderService.showLoader();

    return this.http.post<T>(`${this.baseUrl}/${uri}`, payload, this.httpOptions)
      .pipe(
        tap(() => this.loaderService.hideLoader()),
        catchError(this.handleError<T>(`create: ${uri}`))
      );
    }

  public update<T>(uri: string, id: number, payload: any): Observable<T> {
    this.loaderService.showLoader();

    return this.http.put<T>(`${this.baseUrl}/${uri}/${id}`, payload)
      .pipe(
        tap(() => this.loaderService.hideLoader()),
        catchError(this.handleError<T>(`update: ${uri} - id: ${id}`))
      );
  }

  public destroy<T>(uri: string, id: number): Observable<{}> {
    this.loaderService.showLoader();

    return this.http.delete(`${this.baseUrl}/${uri}/${id}`)
      .pipe(
        tap(() => this.loaderService.hideLoader()),
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
