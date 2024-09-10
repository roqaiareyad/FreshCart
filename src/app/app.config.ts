import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  RouterModule,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient,HttpClient, withFetch } from '@angular/common/http';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

function HttpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http , '../assets/i18n/' , '.json' )
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideToastr(),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(RouterModule, BrowserAnimationsModule, ToastrModule,
    
    TranslateModule.forRoot({
      loader :{
        provide : TranslateLoader ,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient],
      }
    })
  )]
};