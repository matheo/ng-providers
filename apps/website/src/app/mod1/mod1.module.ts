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
      }
    ]),
    MyCommonModule.forChild({
      apiUrl: '/root/mod2',
    }),
  ],
  declarations: [Mod1Component],
})
export class Mod1Module { }
