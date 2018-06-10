import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent } from './component/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import {CategoryService} from './service/category.service';
import {PostService} from './service/post.service';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './component/category/category.component';
import { PostsComponent } from './component/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    HomeComponent,
    CategoryComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
