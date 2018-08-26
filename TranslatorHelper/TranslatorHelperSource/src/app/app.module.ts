import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientService } from './services/http-client/http-client.service';
import { GoogleTranslatorService } from './services/google-translator/google-translator.service';
import { WordDocumentService } from './services/word-document/word-document.service';
import { SettingsStorageService } from './services/settings-storage/settings-storage.service';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpClientService,
    SettingsStorageService,
    GoogleTranslatorService,
    WordDocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
