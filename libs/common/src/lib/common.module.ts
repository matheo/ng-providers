import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisplayComponent } from './components/display/display.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { HttpService } from './services/http.service';
import { InterceptorService } from './services/interceptor.service';
import { API_URL_TOKEN } from './tokens/api.token';
import { ERROR_RETRY_TOKEN } from './tokens/error.token';

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
})
export class MyCommonModule {
  static forRoot(config: { apiUrl: string, errorRetry?: string }) {
    return {
      ngModule: MyCommonModule,
      providers: [
        HttpService,
        ErrorHandlerService,
        {
          provide: API_URL_TOKEN,
          useValue: config.apiUrl,
        },
        {
          provide: ERROR_RETRY_TOKEN,
          useValue: config.errorRetry || 'defaultRetry',
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        }
      ]
    };
  }

  static forChild(config: { apiUrl?: string, errorRetry?: string }) {
    return {
      ngModule: MyCommonModule,
      providers: [
        /**
         * The services using the Token needs to be provided
         * in the same level of the hierarchy tree to use it instead the parent one.
         */
        !config.apiUrl
          ? []
          : [
              HttpService,
              {
                provide: API_URL_TOKEN,
                useValue: config.apiUrl,
              },
            ],
        !config.errorRetry
          ? []
          : [
              ErrorHandlerService,
              {
                provide: ERROR_RETRY_TOKEN,
                useValue: config.errorRetry,
              }
            ],
      ]
    }
  }
}
