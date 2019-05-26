import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {NotFoundComponent} from './not-found.component';

const routes: Routes = [
  {path: '', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ]
})

export class NotFoundModule {
}
