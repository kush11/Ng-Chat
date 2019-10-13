import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/toPromise';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'https://chatapi.edwisor.com';

  constructor(public http: HttpClient) { }

  public signupFunction(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('password', data.password)
      .set('email', data.email)
      .set('apiKey', data.apiKey);
    return this.http.post(`${this.url}/api/v1/users/signup`, params);
  }
  public signinFunction(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  }
  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data));


  }


  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError
}
