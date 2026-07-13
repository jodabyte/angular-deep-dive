import { Component } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@Component({
  selector: 'app-root',
  imports: [AuthComponent, LearningResourcesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
