import { Component, inject, input } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  //userId = input.required<string>();
  userName = input.required<string>();
  // private userService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private desctroyRef = inject(DestroyRef);

  //userName = computed(() => this.userService.users.find((u) => u.id === this.userId())?.name);

  // ngOnInit(): void {
  // alternative to resolveUserName()
  //
  //     console.log(this.activatedRoute);
  //     const subcription1 = this.activatedRoute.paramMap.subscribe({
  //       next: (paramMap) => {
  //         this.userName =
  //           this.userService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
  //       },
  //     });
  // this.desctroyRef.onDestroy(() => subcription1.unsubscribe());

  // activatedRoute.data contains all static and resolved data
  // const subcription2 = this.activatedRoute.data.subscribe({
  //   next: (data) => {
  //     console.log(data);
  //   },
  // });

  // this.desctroyRef.onDestroy(() => subcription2.unsubscribe());
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot,
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot,
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
};
