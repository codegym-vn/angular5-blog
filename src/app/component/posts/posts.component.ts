import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/post';
import {BaseService} from '../../service/base.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  posts: Post[];

  private baseBackendUrl: string;

  constructor() {
    this.baseBackendUrl = BaseService.BASE_BACK_END_URL + '/features/';
  }

  ngOnInit() {
  }
}
