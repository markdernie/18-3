import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { interceptorInterceptor } from './interceptor.interceptor'
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes),
    provideHttpClient(withInterceptors([interceptorInterceptor])),
    provideAnimations()
  ]
};
