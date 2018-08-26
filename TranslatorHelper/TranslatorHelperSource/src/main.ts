import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



Office.initialize = function () {
  if (environment.production) {
    enableProdMode();
  }
  const platform = platformBrowserDynamic();
  platform.bootstrapModule(AppModule)
    .catch(err => console.log(err));
};

