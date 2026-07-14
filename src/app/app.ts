import { Component, computed, inject } from '@angular/core';
import { Auth } from './auth/auth';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@Component({
  selector: 'app-root',
  imports: [AuthComponent, LearningResourcesComponent, Auth],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
