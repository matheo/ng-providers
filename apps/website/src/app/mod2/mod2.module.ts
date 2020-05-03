import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyCommonModule, DisplayComponent } from '@matheo/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DisplayComponent,
      }
    ]),
    MyCommonModule.forChild({
      apiUrl: 'mod2',
    }),
  ],
  declarations: [],
})
export class Mod2Module { }
