import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  configUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjTe1GYVkcxmlanVth2vYWUp7zttsoZc8';

  body = {
    "email": "diegomail@gmail.com",
    "password": "abc123@@",
    "returnSecureToken": "true"
};

  constructor(private http: HttpClient) { }
  
  obtenerToken(): Observable<any> {
    return this.http.post<any>(this.configUrl, this.body);
  }

}
