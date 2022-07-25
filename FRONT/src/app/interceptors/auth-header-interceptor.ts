import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
// import { SpinnerService } from '../shared/components/spinner/spinner.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor (
        private loginService: LoginService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        let tokenStorage = this.loginService.getAuthToken();
        let authReq;

        if(tokenStorage && (tokenStorage != '')) {
            let authToken = 'Bearer ' + tokenStorage;

            authReq = request.clone({
                setHeaders: { 
                    'Authorization': authToken,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

        } else {
            authReq = request;
        }

       
        return next.handle(authReq);
    }
}