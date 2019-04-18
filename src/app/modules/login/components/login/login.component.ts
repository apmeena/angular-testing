import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {
    username: '',
    password: ''
  }

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
      this.router.navigate(['users']);
    }
  }

  public login() {
    if (this.user.username && this.user.password) {
      if (this.user.username === 'test' && this.user.password === 'test') {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['users']);
      } else {
        this.snackBar.open('Invalid credentials', '', {
          duration: 4000,
        });
      }
    } else {
      this.snackBar.open('Please enter credentials', '', {
        duration: 4000,
      });
    }
  }

}
