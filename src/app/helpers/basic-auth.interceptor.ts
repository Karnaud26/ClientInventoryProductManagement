import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { AppService } from "../app.service";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor{

  constructor(private cookieService: CookieService){}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = this.cookieService.get('token');
    /*if(sessionStorage.getItem('currentUser') && sessionStorage.getItem('basicauth')){
      request = request.clone({
        setHeaders: {
           Authorization: sessionStorage.getItem('basicauth')
        }
      })
    }*/
    const xhr = request.clone({
      headers: request.headers.set('Authorization', `Basic ${token}`)
    });
    return next.handle(xhr);
  }
}
