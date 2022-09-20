import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url: string = "https://jsonplaceholder.typicode.com/users";
  cabeceras: HttpHeaders = new HttpHeaders({"Content-type": "application/json"});

  constructor(private http: HttpClient) { }

  pedirUsuarios(): Observable<any>{
    return this.http.get(this.url, {headers: this.cabeceras});
  }
}
