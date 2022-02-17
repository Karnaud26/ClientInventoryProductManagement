import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ClientInventoryProductManagement';

  constructor(private appService: AppService, private router: Router){}

  ngOnInit(): void {
    if (!this.appService.authenticated){
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/home');
    }
  }
}
