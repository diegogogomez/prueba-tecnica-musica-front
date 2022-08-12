import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }
  
  configUrl = 'http://localhost:8081';

  playLists(token: String): Observable<any> {
    var headers = new HttpHeaders()
   .set('Authorization', "" + token)    
    return this.http.get<any>(this.configUrl + "/api/v1/lists", {'headers':headers});
  }

  deletePlaylist(nombre: String, token: String): Observable<any> {
    var headers = new HttpHeaders()
   .set('Authorization', "" + token) 
    return this.http.delete<any>(this.configUrl + `/api/v1/lists/${nombre}`, {'headers':headers});
  }

}
