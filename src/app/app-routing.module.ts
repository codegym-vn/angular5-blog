import { NgModule } from '@angular/core';
import {HomeComponent} from './component/home/home.component';
import {PostComponent} from './component/post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './component/category/category.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'categories/:id', component: CategoryComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
