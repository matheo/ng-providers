import { NgModule } from '@angular/core';
import { MyCommonModule } from '@matheo/common';

@NgModule({
  imports: [
    MyCommonModule.forChild({
      apiUrl: '/root/mod2',
    }),
  ],
  declarations: [],
})
export class Mod1Module { }
