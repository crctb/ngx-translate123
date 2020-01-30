import { Component, OnInit, Inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from '@angular/common';
import { LanguageService } from './language.service'

@Component({
  selector: "app-root",
  template: `
    <div>
      <h2>{{ "HOME.TITLE" | translate }}</h2>
      <label>
        {{ "HOME.SELECT" | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option
            *ngFor="let lang of translate.getLangs()"
            [value]="lang"
            [selected]="lang === translate.currentLang"
            >{{ lang }}</option
          >
        </select>
      </label>
    </div>
    a: {{ langosh }}
    <div *ngIf="langosh == 'en'">
      enlish
    </div>
    <div *ngIf="langosh == 'fr'">
      frensch
    </div>
    <hr>
    <a routerLink="page-one">one</a> | <a routerLink="page-two">two</a>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  langosh;

  constructor(
    public translate: TranslateService,
    private languageService: LanguageService,
    @Inject(DOCUMENT) private document: Document
    ) {
    translate.addLangs(["en", "fr", 'de']);
    translate.setDefaultLang("en");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }

  ngOnInit() {

    let activeOrder = "a.searchedLocation"
const subMenuItemsDistance = [
            'distances.searchedLocation',
            'distances.airport',
            'distances.trainstation',
            'distances.exhibit',
            'distances.companyLocation'
        ];
        const subMenuItemsPartner = [
            'label.contractor',
            'label.partner',
            'label.contingent'
        ];
        setTimeout(() => {
            // this.subMenuOrder = false;
            // console.log(activeOrder)
            console.log(subMenuItemsDistance.find(a => a.match(activeOrder.split('.')[0])))
            if (subMenuItemsDistance.indexOf(activeOrder) === -1) {
              console.log(123)
//                 document.getElementsByClassName('sort-distance').item(0).classList.remove('active');
            }
            if (subMenuItemsPartner.indexOf(activeOrder) === -1) {
//                 document.getElementsByClassName('sort-partner').item(0).classList.remove('active');
            }
        }, 500);

    this.translate.onLangChange.subscribe(l => {
      // console.log(1, l)
      this.languageService.updateActiveLang(l.lang);
    });

    this.languageService.activeLangData.subscribe(l => {
      // console.log(l)
      this.langosh = l;
      this.setDocumentLang(l);      
    })
  }

      setDocumentLang (lang: string) {
        lang === 'en' ?
            this.document.documentElement.lang = 'en' :
            this.document.documentElement.lang = 'fr';
    }
}
