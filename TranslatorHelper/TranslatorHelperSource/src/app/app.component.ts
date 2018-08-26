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
  constructor(public wordDocumentService: WordDocumentService, public googleTranslatorService: GoogleTranslatorService) {
    this.result = '';
  }
  async translate() {
    const text = await this.wordDocumentService.getParagraph();
    try {
      const translations = (await this.googleTranslatorService.translate(text, 'en', 'zh')).data.translations;
      if (translations.length > 0) {
        this.result = translations[0].translatedText;
      } else {
        this.result = '';
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  async insert() {
    await this.wordDocumentService.insertText(this.result);
  }
}
