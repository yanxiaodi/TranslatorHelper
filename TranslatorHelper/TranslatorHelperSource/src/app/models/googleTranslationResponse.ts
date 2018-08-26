export class GoogleTranslationResponse {
    constructor() {
    }
    data: GoogleTranslations;
}

export class GoogleTranslationResult {
    translatedText: string;
    detectedSourceLanguage: string;
}

export class GoogleTranslations {
    translations: Array<GoogleTranslationResult>;
}
