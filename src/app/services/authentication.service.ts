import {Injectable} from '@angular/core';
import {IUser} from '../domain/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedIn: boolean = false;

  constructor() {
  }

  authenticate(user: IUser): string {
    if (user.username === 'toto' && user.password === 'password') {
      const token: string = '000AAA TOKEN 0000';
      localStorage.setItem('TOKEN', token);
      return token;
    }
  }

  logout(): void {
    if (localStorage.getItem('TOKEN')) {
      this.loggedIn = false;
      localStorage.removeItem('TOKEN');
    }
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
