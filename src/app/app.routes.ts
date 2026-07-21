import { inject } from '@angular/core';
import { CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { routes as userRoutes } from './users/users.routes';

const dummyCanMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 0.5) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No task Selected',
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [dummyCanMatch],
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFound,
  },
];
