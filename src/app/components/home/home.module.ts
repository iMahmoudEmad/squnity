import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';
import {HomeComponent} from './home.component';
import {HomeServicesComponent} from './home-services/home-services.component';
import {SliderComponent} from './slider/slider.component';
import {OurMissionComponent} from './our-mission/our-mission.component';
import {TimelineComponent} from './timeline/timeline.component';
import {CheckServicesComponent} from './check-services/check-services.component';
import {OurClientsComponent} from './our-clients/our-clients.component';
import {ShortServicesComponent} from './short-services/short-services.component';
import {HallOfFameComponent} from './hall-of-fame/hall-of-fame.component';
import {WhyChooseSqunityComponent} from './why-choose-squnity/why-choose-squnity.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeServicesComponent,
    SliderComponent,
    OurMissionComponent,
    TimelineComponent,
    CheckServicesComponent,
    OurClientsComponent,
    ShortServicesComponent,
    HallOfFameComponent,
    WhyChooseSqunityComponent,
  ]
})

export class HomeModule {
}
