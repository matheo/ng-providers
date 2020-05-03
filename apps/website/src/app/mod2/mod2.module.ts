import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyCommonModule } from '@matheo/common';
import { Mod2Component } from './mod2.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Mod2Component,
      }
    ]),
    MyCommonModule.forChild({
      apiUrl: '/root/mod2',
    }),
  ],
  declarations: [Mod2Component],
})
export class Mod2Module { }
