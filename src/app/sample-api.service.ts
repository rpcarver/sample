/* tslint:disable:no-console */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = '/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  private extractDataAsArray(res: Response) {
    const body = res;
    return body || [{ }];
  }

  getAllPurchases(): Observable<any> {
    return this.http.get(endpoint + 'purchases')
      .pipe(map(this.extractData));
  }

  /*
   * Yes, it returns one purchase, but as an array, hence the name
   */
  getPurchasesById(id): Observable<any> {
    // TODO: sanitize id
    return this.http.get(endpoint + 'purchases?id=' + id)
      .pipe(map(this.extractDataAsArray));
  }

  getPurchasesBySymbol(symbol): Observable<any> {
    // TODO: sanitize symbol
    return this.http.get(endpoint + 'purchases?symbol=' + symbol)
      .pipe(map(this.extractData));
  }

  addPurchase(purchase): Observable<any> {
    // TODO: sanitize purchase
    return this.http.post<any>(endpoint + 'purchases', JSON.stringify(purchase), httpOptions)
      .pipe(tap((p) => console.log(`added purchase w/ id=${p.id}`)),
      catchError(this.errHandler<any>('addPurchase'))
    );
  }

  private errHandler<T>(methodName, result?: T) {
    return (err: any): Observable<T> => {
      // TODO: add production error handling
      console.error(err);
      console.log(`${methodName} go boom!: ${err.message}`);
      // return empty result
      return of(result as T);
    };
  }
}
