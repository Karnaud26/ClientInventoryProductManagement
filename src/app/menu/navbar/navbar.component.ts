import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSideBar: boolean = false;

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: AppService) { }

  ngOnInit(): void {

  }

  signOut(){
    this.appService.logout();
  }

  displaySideBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }
}
