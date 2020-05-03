import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MyCommonModule } from '@matheo/common';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { routes } from './app.routing';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MyCommonModule.forRoot({
      apiUrl: '/root',
    }),
    RouterModule.forRoot(routes),
  ],
  declarations: [RootComponent, AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
