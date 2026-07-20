import { Component } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
