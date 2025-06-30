import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login-screen/login-screen').then((c) => c.LoginScreen),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/login-screen/login-screen').then((c) => c.LoginScreen),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup-screen/signup-screen').then((c) => c.SignupScreen),
  },
  {
    path: 'forgot',
    loadComponent: () =>
      import('./pages/forgot-screen/forgot-screen').then((c) => c.ForgotScreen),
  },
  {
    path: 'homepage',
    loadComponent: () =>
      import('./pages/homepage/homepage').then((c) => c.Homepage),
  },
];
