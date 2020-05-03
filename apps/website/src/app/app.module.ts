import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyCommonModule } from '@matheo/common';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MyCommonModule.forRoot({
      apiUrl: '/root',
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
