import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsStorageService {

  constructor() { }
  store(specificKey: string, value: string) {
    window.localStorage.setItem(specificKey, value);
  }

  fetch(specificKey: string): string {
    return window.localStorage.getItem(specificKey);
  }

  remove(specificKey: string) {
    window.localStorage.removeItem(specificKey);
  }
}
