import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(
		private http: HttpClient
	) { }
	
	Login(user: any, password: any) {
		return this.http
			.post(API_URL + '/login/',{ login: user, senha: password })
			.pipe(tap((res:any) => {
				this.setAuthToken(res.chave)
			}));
	}

    setAuthToken(value:any){
        sessionStorage.setItem('AuthToken', value);
    }
    
    getAuthToken(){
        return sessionStorage.getItem('AuthToken');
    }
}