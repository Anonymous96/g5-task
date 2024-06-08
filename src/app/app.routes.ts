import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/table/table.component').then((c) => c.TableComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: 'blocks',
    loadComponent: () =>
      import('./pages/blocks/blocks.component').then((c) => c.BlocksComponent),
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./pages/table/table.component').then((c) => c.TableComponent),
  },
  {
    path: 'detail/:username',
    loadComponent: () =>
      import('./pages/detail/detail.component').then((c) => c.DetailComponent),
  },

  //   { path: '', redirectTo: '/blocks', pathMatch: 'full' },
];
