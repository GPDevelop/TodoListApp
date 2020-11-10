import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/apiauth.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({templateUrl: 'login.component.html'})

export class LoginComponent implements OnInit
{
    public username: string;
    public password: string;

    constructor(public apiAuth: ApiAuthService,
        private router: Router
        ){
        
    }
    
    ngOnInit()
    {
    }

    login(){
        this.apiAuth.login(this.username, this.password).subscribe(response => {
            if(response.result === 1)
            {
                this.router.navigate(['/']);
            }
        });
    }

}