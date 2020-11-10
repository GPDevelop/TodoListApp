import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { TareaInterface } from '../models/tareaInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiestadoService {

  url = 'https://localhost:44358/api/estado';

  constructor(
    private _http: HttpClient
  ) { }

  getEstados(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }
  
}
