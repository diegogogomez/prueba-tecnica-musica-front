import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }
  
  configUrl = 'http://104.199.108.132:8081';

  playLists(): Observable<any> {
    return this.http.get<any>(this.configUrl + "/api/v1/lists");
  }

  deletePlaylist(nombre: String): Observable<any> {
    return this.http.delete<any>(this.configUrl + `/api/v1/lists/${nombre}`);
  }

}
