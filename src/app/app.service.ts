import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_URLS } from "./config/api.url.config";
import { map } from 'rxjs/operators';
import { CookieService } from "ngx-cookie-service";

import { NotificationService } from './toastr.service';

@Injectable()
export class AppService {

  authenticated: boolean = false;

  msgApplication: 'Product Management';

  constructor(private httpClient: HttpClient, private cookieService: CookieService, private notifyService: NotificationService) { }

  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      //let headers = new HttpHeaders().set('authorization','Basic ' + token);
      //if credentials.username ? { 'authorization': 'Basic' + token } : {}
      //const headers = new HttpHeaders().set('Authorization', 'Basic ' + token );
      //console.log(headers);
      //headers: new HttpHeaders().set('Authorization', 'Auth_Token')
      //headers.append('Content-Type', 'application/json');
      this.cookieService.set('token', token);
      /*this.httpClient.get(API_URLS.USER_URL).pipe(
          map(
            userData =>{
              sessionStorage.setItem('currentUser',credentials.username);
              sessionStorage.setItem('basicauth', token);
              this.authenticated = true;
              return userData;
            }
          )
        );*/
      this.httpClient.get(API_URLS.USER_URL).subscribe(
        response => {
          if(response && response['name']){
            this.authenticated = true;
          }else{
            this.authenticated = false;
          }
          return callback && callback();
        },
        errorMsg => { console.log(errorMsg); this.notifyService.showError(errorMsg.error, this.msgApplication)}
      );
    }
    else{
      this.authenticated = false;
    }
  }

  isUserLoggedIn() {
    let user = this.cookieService.get('token');
    console.log(!(user === null))
    return !(user === null)
  }

  logout(callback?){
    /*const _this = this
    this.httpClient.post('logout',{}).subscribe(() =>{
      _this.authenticated = false;
      return callback && callback();
    });*/
    //sessionStorage.removeItem('currentUser')
    return callback && callback();
  }
}
