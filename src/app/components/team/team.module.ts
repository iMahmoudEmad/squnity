import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {TeamComponent} from './team.component';
import {OwlModule} from 'ngx-owl-carousel';

const routes: Routes = [
  {path: '', component: TeamComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    OwlModule
  ],
  declarations: [
    TeamComponent
  ]
})

export class TeamModule {
}
