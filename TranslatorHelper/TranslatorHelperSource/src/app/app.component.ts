import { SettingsStorageService } from './services/settings-storage/settings-storage.service';
import { GoogleTranslatorService } from './services/google-translator/google-translator.service';
import { WordDocumentService } from './services/word-document/word-document.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TranslatorHelperSource';
  result: string;
  apiKey: string;
  constructor(public wordDocumentService: WordDocumentService, public googleTranslatorService: GoogleTranslatorService,
    public settingsStorageService: SettingsStorageService) {
    this.result = '';
    this.apiKey = settingsStorageService.fetch('ApiKey');
  }

  saveApiKey() {
    console.log(this.apiKey);
    this.settingsStorageService.store('ApiKey', this.apiKey);
    this.googleTranslatorService.apiKey = this.apiKey;
  }
  async translate() {
    const text = await this.wordDocumentService.getParagraph();
    try {
      const translations = (await this.googleTranslatorService.translate(text, 'en', 'zh')).data.translations;
      if (translations.length > 0) {
        this.result = translations[0].translatedText;
        await this.wordDocumentService.insertText(this.result);
      } else {
        this.result = 'Error';
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}
