import { NgModule } from '@angular/core';
import { MyCommonModule } from '@matheo/common';
import { Mod1Component } from './mod1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Mod1Component,
      },
      {
        path: 'submod1',
        loadChildren: () => import('./submod1/submod1.module').then(m => m.Submod1Module),
      }
    ]),
    MyCommonModule.forChild({
      apiUrl: '/root/mod1',
    }),
  ],
  declarations: [Mod1Component],
})
export class Mod1Module { }
