import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../model/post';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private posts: Post[];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  private getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getPosts(id)
      .subscribe(posts => this.posts = posts.posts); // TODO: Change to posts only
  }
}
