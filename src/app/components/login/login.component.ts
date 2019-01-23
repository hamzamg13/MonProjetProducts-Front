import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../domain/iuser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder,
              private _router: Router) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(user: IUser): void {
    console.log('Vous avez saisi le user' + ' ' + user.username + '  ' + user.password);

    this._router.navigateByUrl('/');
  }

}
