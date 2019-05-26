import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {TrainingComponent} from './training.component';

const routes: Routes = [
  {path: '', component: TrainingComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    TrainingComponent
  ]
})

export class TrainingModule {
}
