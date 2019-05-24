import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {OwlModule} from 'ngx-owl-carousel';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';
import {TrainingComponent} from './components/training/training.component';
import {TeamComponent} from './components/team/team.component';
import {SliderComponent} from './components/home/slider/slider.component';
import {NewsLetterComponent} from './components/news-letter/news-letter.component';
import {CompanyQouteComponent} from './components/company-qoute/company-qoute.component';
import {OurMissionComponent} from './components/home/our-mission/our-mission.component';
import {TimelineComponent} from './components/home/timeline/timeline.component';
import {CheckServicesComponent} from './components/home/check-services/check-services.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ServicesComponent} from './components/services/services.component';
import { OurClientsComponent } from './components/home/our-clients/our-clients.component';
import { ShortServicesComponent } from './components/home/short-services/short-services.component';
import { HallOfFameComponent } from './components/home/hall-of-fame/hall-of-fame.component';
import {HomeServicesComponent} from './components/home/home-services/home-services.component';
import {WhyChooseSqunityComponent} from './components/home/why-choose-squnity/why-choose-squnity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    HomeServicesComponent,
    ServicesComponent,
    TrainingComponent,
    TeamComponent,
    SliderComponent,
    NewsLetterComponent,
    CompanyQouteComponent,
    OurMissionComponent,
    TimelineComponent,
    CheckServicesComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    OurClientsComponent,
    ShortServicesComponent,
    HallOfFameComponent,
    WhyChooseSqunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
