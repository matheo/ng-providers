import { NgModule } from '@angular/core';
import { MyCommonModule } from '@matheo/common';
import { Submod1Component } from './submod1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Submod1Component,
      }
    ]),
    MyCommonModule.forChild({
      apiUrl: '/root/mod1/submod1',
    }),
  ],
  declarations: [Submod1Component],
})
export class Submod1Module { }
