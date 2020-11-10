import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../Models/Response';
import { usuarioInterface } from '../Models/usuarioInterface';
import { map } from 'rxjs/operators';
import { LoginInterface } from '../models/login';

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'aplication/json'
    })
  }

@Injectable({
     providedIn: 'root'
    })


export class ApiAuthService{
    url= 'https://localhost:44358/api/Usuario/login';
    
    private usuarioSubject: BehaviorSubject<usuarioInterface>;

    public get usuarioData(): usuarioInterface{
      return this.usuarioSubject.value;
    }

    constructor(private _http: HttpClient){
        this.usuarioSubject = 
        new BehaviorSubject<usuarioInterface>(JSON.parse(localStorage.getItem('usuario')));
    }

    login(username: string, password: string): Observable<Response>
    {
      return this._http.post<Response>(this.url, {username, password}, httpOption).pipe(
        map(res => {
          if(res.result === 1)
          {
            const usuario: usuarioInterface = res.data;
            localStorage.setItem('usuario', JSON.stringify(usuario));
            this.usuarioSubject.next(usuario);
          }
          return res;
        })
      );
      
    }

    logOut()
    {
      localStorage.removeItem('usuario');
      this.usuarioSubject.next(null);
    }
}