import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts: Post[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts() {
    this.postService.getPosts()
      .subscribe(postPage => this.posts = postPage.content);
  }
}
