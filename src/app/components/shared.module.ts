import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderSectionComponent} from './header-section/header-section.component';
import {CompanyQouteComponent} from './company-qoute/company-qoute.component';
import {NewsLetterComponent} from './news-letter/news-letter.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderSectionComponent,
    CompanyQouteComponent,
    NewsLetterComponent,
  ],
  declarations: [
    HeaderSectionComponent,
    CompanyQouteComponent,
    NewsLetterComponent,
  ]
})

export class SharedModule {
}
