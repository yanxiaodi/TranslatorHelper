import { TestBed, inject } from '@angular/core/testing';

import { GoogleTranslatorService } from './google-translator.service';

describe('GoogleTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleTranslatorService]
    });
  });

  it('should be created', inject([GoogleTranslatorService], (service: GoogleTranslatorService) => {
    expect(service).toBeTruthy();
  }));
});
