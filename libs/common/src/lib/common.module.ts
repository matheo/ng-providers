import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './components/display/display.component';
import { HttpService } from './services/http.service';
import { API_URL_TOKEN } from './tokens/api.token';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DisplayComponent,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    DisplayComponent,
  ],
  providers: [
    HttpService,
  ]
})
export class MyCommonModule {
  static forRoot(config: { apiUrl: string }) {
    return {
      ngModule: MyCommonModule,
      providers: [
        {
          provide: API_URL_TOKEN,
          useValue: config.apiUrl,
        }
      ]
    };
  }

  static forChild(config: { apiUrl: string }) {
    return {
      ngModule: MyCommonModule,
      providers: [
        {
          provide: API_URL_TOKEN,
          useValue: config.apiUrl,
        }
      ]
    }
  }
}
