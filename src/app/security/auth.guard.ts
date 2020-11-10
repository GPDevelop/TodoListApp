import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApiAuthService } from '../services/apiauth.service';


@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(private router: Router,
         private apiAuthService: ApiAuthService
    ){
    }

    canActivate(route: ActivatedRouteSnapshot){
        const usuario = this.apiAuthService.usuarioData;

        if(usuario != null)
        {
            return true;
        }else

        this.router.navigate(['/login']);
        return false;
    }
}