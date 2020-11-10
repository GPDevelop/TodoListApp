import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { TareaInterface } from '../models/tareaInterface';


const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'aplication/json'
  })
} 

@Injectable({
  providedIn: 'root'
})
export class ApitareaService {

  url = 'https://localhost:44358/api/tarea';

  constructor(
    private _http: HttpClient
  ) { }

  getTareas(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }
  
  add(tarea: TareaInterface): Observable<Response>{
    return this._http.post<Response>(this.url, tarea, httpOption);
  }
  
  edit(tarea: TareaInterface): Observable<Response>{
    return this._http.put<Response>(this.url, tarea, httpOption);
  }

  delete(id: number): Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);
  }

}
