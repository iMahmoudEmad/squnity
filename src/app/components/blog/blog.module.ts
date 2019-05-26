import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {BlogComponent} from './blog.component';

const routes: Routes = [
  {path: '', component: BlogComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    BlogComponent
  ]
})

export class BlogModule {
}
