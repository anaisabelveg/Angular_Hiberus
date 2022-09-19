import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = "https://pokeapi.co/api/v2/pokemon";
  cabeceras: HttpHeaders = new HttpHeaders({"Content-type":"application/json"});

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url, {headers: this.cabeceras});
  }

  pedirPokemons(ruta: string): Observable<any>{
    return this.http.get(ruta, {headers: this.cabeceras});
  }

  buscar(nombre:string): Observable<any>{
    return this.http.get(this.url + "/" + nombre, {headers: this.cabeceras});
  }
}
