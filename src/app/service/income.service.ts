import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Income } from '../model/income';
import { Observable, throwError } from 'rxjs'; 
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class IncomeService {



  private handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  constructor(private http: HttpClient) { }

  getIncome() {
    // return this.http.get('https://www.easy-mock.com/mock/5c93528a933c7c3297e514d4/example/income');
    return this.http.get('http://localhost:3000/income');
  }

  addIncome(income) {
    return this.http.post('http://localhost:3000/income', income, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteIncome(createTime) {
    return this.http.post('http://localhost:3000/delete', createTime, httpOptions)
  }
}
