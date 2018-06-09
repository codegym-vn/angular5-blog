import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPost();
  }

  private getPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }
}
