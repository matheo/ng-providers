import { NgModule } from '@angular/core';
import { MyCommonModule, DisplayComponent } from '@matheo/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DisplayComponent,
      }
    ]),
    MyCommonModule.forChild({
      apiUrl: '/root/mod1/submod1',
    }),
  ],
  declarations: [],
})
export class Submod1Module { }
