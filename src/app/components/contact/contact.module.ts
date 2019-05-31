import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {ContactComponent} from './contact.component';
import {AgmCoreModule} from '@agm/core';

const routes: Routes = [
  {path: '', component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPipMiPXJ2iG6FetbwnFBz4AHALS2kmf8'
    })
  ],
  declarations: [
    ContactComponent
  ]
})

export class ContactModule {
}
