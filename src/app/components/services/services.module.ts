import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {ServicesComponent} from './services.component';

const routes: Routes = [
  {path: '', component: ServicesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ServicesComponent
  ]
})

export class ServiceModule {
}
