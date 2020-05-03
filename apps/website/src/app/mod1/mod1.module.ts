import { NgModule } from '@angular/core';
import { MyCommonModule, DisplayComponent } from '@matheo/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DisplayComponent,
      },
      {
        path: 'submod1',
        loadChildren: () => import('./submod1/submod1.module').then(m => m.Submod1Module),
      }
    ]),
    MyCommonModule.forChild({
      apiUrl: 'mod1',
      errorRetry: 'mod1Retry',
    }),
  ],
  declarations: [],
})
export class Mod1Module { }
