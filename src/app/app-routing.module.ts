import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: './components/home/home.module#HomeModule'},
  {path: 'about', loadChildren: './components/about/about.module#AboutModule'},
  {path: 'services', loadChildren: './components/services/services.module#ServiceModule'},
  {path: 'training', loadChildren: './components/training/training.module#TrainingModule'},
  {path: 'team', loadChildren: './components/team/team.module#TeamModule'},
  {path: 'blog', loadChildren: './components/blog/blog.module#BlogModule'},
  {path: 'blog/:id', loadChildren: './components/blog/article/article.module#ArticleModule'},
  {path: 'contact', loadChildren: './components/contact/contact.module#ContactModule'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
