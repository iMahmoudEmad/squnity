import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';
import {SharedModule} from '../shared.module';

const routes: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    AboutComponent
  ]
})

export class AboutModule {
}
