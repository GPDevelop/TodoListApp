import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { usuarioInterface } from '../models/usuarioInterface';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
} 

@Injectable({
  providedIn: 'root'
})
export class ApiusuarioService {

  url = 'https://localhost:44358/api/usuario';


  
  constructor(
    private _http: HttpClient
  ) { }

  getUsuarios(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }
  
  add(usuario: usuarioInterface): Observable<Response>{
    return this._http.post<Response>(this.url, usuario, httpOption);
  }

  edit(usuario: usuarioInterface): Observable<Response>{
    return this._http.put<Response>(this.url, usuario, httpOption);
  }

  delete(id: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);
  }

}
