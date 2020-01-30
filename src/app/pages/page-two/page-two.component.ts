import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../language.service'

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  langosh;

  constructor(private languageService: LanguageService,) {}

  ngOnInit() {
    this.languageService.activeLangData.subscribe(l => {
      this.langosh = l; 
    })
  }
}