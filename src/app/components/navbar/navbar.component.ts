import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean = false;

  constructor(private _service: AuthenticationService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  isAdmin(): boolean {
    return this._service.getJwtClaim('sub') === 'admin';
  }

  isLoggedIn(): boolean {
    return this._service.isLoggedIn();
  }

  logout() {
    this._service.logout();
    this._router.navigateByUrl('/login');
  }

}
