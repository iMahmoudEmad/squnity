import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {ArticleComponent} from './article.component';
import {SharedModule} from '../../shared.module';

const routes: Routes = [
  {path: '', component: ArticleComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ArticleComponent
  ]
})

export class ArticleModule {
}
