import { Component, OnInit } from "@angular/core";
import { LanguageService } from '../../language.service'

@Component({
  selector: "app-page-one",
  templateUrl: "./page-one.component.html",
  styleUrls: ["./page-one.component.css"]
})
export class PageOneComponent implements OnInit {
  langosh;

  constructor(private languageService: LanguageService,) {}

  ngOnInit() {
    this.languageService.activeLangData.subscribe(l => {
      this.langosh = l; 
    })
  }
}
