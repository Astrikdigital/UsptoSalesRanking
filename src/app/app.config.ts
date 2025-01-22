import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {   withHashLocation } from '@angular/router';
import { pendingRequestsInterceptor$ } from 'ng-http-loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withHashLocation()),provideHttpClient(withInterceptors([pendingRequestsInterceptor$])),



  ]
};
