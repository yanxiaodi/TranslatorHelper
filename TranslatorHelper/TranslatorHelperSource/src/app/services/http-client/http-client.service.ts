import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(public http: Http) { }

  get4Json<T>(url: string): Promise<T> {
    return this.http.get(url).toPromise()
      .then(response => response.json());
  }

  post4Json<T>(url: string, params: any): Promise<T> {

    return this.http.post(url, params).toPromise()
      .then(response => response.json());
  }
}
