import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { fail } from 'assert';

@Component({
  selector: 'frs-bread-crumb',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  location: Location;

  constructor() {

  }

  ngOnInit() {
    // console.log(location.pathname);
  }

  ngAfterContentChecked() {
    this.showBreadCrumb();

  }

  toggleBar() {
   // hide/show sider bar 
  }

  homeTag;
  userListCrumb = false;
  infolistCrumb = false;
  fundsManageCrumb = false;

  showBreadCrumb() {

    let  urlPath = location.pathname;
    
    switch (urlPath) {
      case '/index':
        this.homeTag = true;
        this.userListCrumb = false;
        this.fundsManageCrumb = false;
        this.infolistCrumb = false;
        break;
      case '/userList':
        this.userListCrumb = true;
        this.fundsManageCrumb = false;
        this.infolistCrumb = false;
        break;
      case '/infoList':
        this.infolistCrumb = true;
        this.userListCrumb = false;
        this.fundsManageCrumb = false;
        break;
      case '/fundsManagement':
        this.userListCrumb = false;
        this.fundsManageCrumb = true;
        this.infolistCrumb = false;
        break;
    } 

    // return false
  }
}
