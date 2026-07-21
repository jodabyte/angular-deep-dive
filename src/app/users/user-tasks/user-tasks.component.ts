import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  //userId = input.required<string>();
  userName = '';
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private desctroyRef = inject(DestroyRef);

  //userName = computed(() => this.userService.users.find((u) => u.id === this.userId())?.name);

  ngOnInit(): void {
    console.log(this.activatedRoute);

    const subcription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.userService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
      },
    });

    this.desctroyRef.onDestroy(() => subcription.unsubscribe());
  }
}
