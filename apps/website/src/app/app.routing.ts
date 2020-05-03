import { Routes } from '@angular/router';
import { DisplayComponent } from '@matheo/common';

export const routes: Routes = [
  {
    path: '',
    component: DisplayComponent,
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
