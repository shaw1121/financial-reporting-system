import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Income } from '../model/income';
import { Observable, throwError } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IncomeData } from '../model/IncomeData';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) { }

  getIncome(): Observable<IncomeData> {
    // return this.http.get('https://www.easy-mock.com/mock/5c93528a933c7c3297e514d4/example/income');
    return this.http
        .get<IncomeData>(`${baseUrl}/income`)
        .pipe(
          catchError(this.handleError)
        )
  }

  addIncome(income: Income): Observable<Income> {
    return this.http.post<Income>(`${baseUrl}/income`, income, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteIncome(createTime) {
    return this.http
        .post(`${baseUrl}/delete`, createTime, httpOptions)
        .pipe(
          catchError(this.handleError)
        )
  }

  editIncome(income) {
    return this.http
        .put(`${baseUrl}/income`, income, httpOptions)
        .pipe(
          catchError(this.handleError)
        )
  }

  // private handleError(error) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };

  private handleError(error: Response) {
    if (error.status == 504) {
        return Observable.throw('REQUEST_TIME_OUT');
    }
    else if (error.status >= 501) {
        return Observable.throw('SERVICE_UN');
    }
    else if (error.status == 401 || error.status == 403) {
        return Observable.throw('UNAUTHOR');
    }
    else {
        if (error.statusText === "OK") {
            return Observable.throw('ERROR_OCCURED');
        } else {
            return Observable.throw(error.statusText || 'ERROR_OCCURED');
        }

    }
  }
}
