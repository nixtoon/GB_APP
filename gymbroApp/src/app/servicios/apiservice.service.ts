import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin' :'*'
    })
  }

  constructor(private http: HttpClient) { }

  apiUrl = 'https://5vzm65k0-3000.use.devtunnels.ms/api';

  login(user:string, password:string): Observable<any> {
    const body = {
      user: user,
      password: password
    }
    return this.http.post(this.apiUrl + '/login', body, this.httpOptions).pipe(retry(3));
  }


  getEjercicios(): Observable<any> {
    return this.http.get(this.apiUrl + '/listar-ejercicios').pipe(retry(3));
  }

}
