import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showHideSideBar: boolean = false;
  constructor() { }

  onShowSideBarChange(showHideSideBar = false){
    this.showHideSideBar = showHideSideBar;
  }

  ngOnInit(): void {
  }

}
