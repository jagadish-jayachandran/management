import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';
import { Role } from '../_models/role';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  user: User = new User;

  constructor(private authenticationService: AuthenticationService,public location: Location, private router: Router) { 
    this.authenticationService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

  }
  isMaps(path: any){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(path == titlee){
        return false;
    }
    else {
        return true;
    }
}


get isAdmin() {
    return this.user && this.user.role === Role.Admin;
}

logout() {
    this.authenticationService.logout();
}
}
