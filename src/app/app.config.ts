import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';
import { routes } from './app.routes';

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  // const req = request.clone({
  //   headers: request.headers.set('Test', 'Test'),
  // });
  console.log('[Outgoing Request]');
  console.log(request);
  return next(request).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.log('[Incoming Response]');
          console.log(event.status);
          console.log(event.body);
        }
      },
    }),
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor])),
  ],
};
