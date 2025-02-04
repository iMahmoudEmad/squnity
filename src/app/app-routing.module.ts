import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './components/about/about.module#AboutModule'
  },
  {
    path: 'services',
    loadChildren: './components/services/services.module#ServiceModule'
  },
  {
    path: 'services/:id',
    loadChildren: './components/services/service/service.module#ServiceModule'
  },
  {
    path: 'training',
    loadChildren: './components/training/training.module#TrainingModule'
  },
  {
    path: 'training/:id',
    loadChildren: './components/training/train-item/train-item.module#TrainItemModule'
  },
  {
    path: 'team',
    loadChildren: './components/team/team.module#TeamModule'
  },
  {
    path: 'blog',
    loadChildren: './components/blog/blog.module#BlogModule'
  },
  {
    path: 'blog/:id',
    loadChildren: './components/blog/article/article.module#ArticleModule'
  },
  {
    path: 'contact',
    loadChildren: './components/contact/contact.module#ContactModule'
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path: '**',
    loadChildren: './components/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
