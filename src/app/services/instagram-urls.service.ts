import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InstagramURL } from '../models/instagramURL';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class InstagramUrlsService {

  private instgramAPI = 'api/instagramURLs';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `operation: ${operation}`);

      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  public getInstagramURLs(): Observable<InstagramURL[]> {
    return this.http.get<InstagramURL[]>(this.instgramAPI)
    .pipe(
      tap(instagramURLs => console.log('fetched instagramURLs!')),
      catchError(this.handleError('getInstagramURLs', []))
    );
  }

  public getInstagramURL(id: string): Observable<InstagramURL> {
    const url = `${this.instgramAPI}/${id}`;

    return this.http.get<InstagramURL>(url)
      .pipe(
        tap(_ => console.log(`fetched instagramURL of id ${id}!`)),
        catchError(this.handleError<InstagramURL>(`getInstagramURL id=${id}`))
      );
  }

  public updateInstagramURL(instagramURL: InstagramURL): Observable<any> {

    return this.http.put(this.instgramAPI, instagramURL, httpOptions)
      .pipe(
        tap(_ => console.log(`Updated instagramURL of id ${instagramURL.id}!`)),
        catchError(this.handleError<any>('UpdateInstagramURL'))
      );
  }

  public addInstagramURL(instagramURL: InstagramURL): Observable<InstagramURL> {
    return this.http.post<InstagramURL>(this.instgramAPI, instagramURL, httpOptions)
      .pipe(
        tap((instaURL: InstagramURL) => console.log(`Added instagramURL with id ${instagramURL.id}!`)),
        catchError(this.handleError<InstagramURL>(`addInstagramURL`))
      );
  }

  public deleteInstagramURL(id: string): Observable<InstagramURL> {
    const url = `${this.instgramAPI}/${id}`;

    return this.http.delete<InstagramURL>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`Deleted instagramURL of id ${id}!`)),
        catchError(this.handleError<InstagramURL>(`deleteInstagramURL`))
      );
  }

}
