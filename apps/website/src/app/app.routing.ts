import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mod1',
  },
  {
    path: 'mod1',
    loadChildren: () => import('./mod1/mod1.module').then(m => m.Mod1Module),
  },
  {
    path: 'mod2',
    loadChildren: () => import('./mod2/mod2.module').then(m => m.Mod2Module),
  },
];
