import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {TrainItemComponent} from './train-item.component';
import {SharedModule} from '../../shared.module';

const routes: Routes = [
  {path: '', component: TrainItemComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    TrainItemComponent
  ]
})

export class TrainItemModule {
}
