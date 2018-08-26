import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientService } from './services/http-client/http-client.service';
import { GoogleTranslatorService } from './services/google-translator/google-translator.service';
import { WordDocumentService } from './services/word-document/word-document.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpClientService,
    GoogleTranslatorService,
    WordDocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
