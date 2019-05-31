import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../../shared.module';
import {ServiceComponent} from './service.component';

const routes: Routes = [
  {path: '', component: ServiceComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ServiceComponent
  ]
})

export class ServiceModule {
}
