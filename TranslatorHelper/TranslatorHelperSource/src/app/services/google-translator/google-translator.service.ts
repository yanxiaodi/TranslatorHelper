import { GoogleTranslationResponse } from './../../models/googleTranslationResponse';
import { HttpClientService } from './../http-client/http-client.service';
import { GoogleTranslationRequest } from '../../models/googleTranslationRequest';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslatorService {

  constructor(public http: HttpClientService) { }
  appKey = '';
  async translate(text: string, source: string = 'en', target: string = 'zh') {
    const request = new GoogleTranslationRequest();
    request.q = new Array<string>();
    request.q.push(text);
    request.source = source;
    request.target = target;
    console.log(request);
    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.appKey}`;
    return await this.http.post4Json<GoogleTranslationResponse>(url, request);
  }
}
