import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LanguageService {

  private activeLang = new BehaviorSubject<any>(null);
  activeLangData = this.activeLang.asObservable();

  constructor(  ) {  }

    updateActiveLang(activeLangData) {
      this.activeLang.next(activeLangData);
    }

}