import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../model/post';
import {BaseService} from './base.service';
import {catchError} from 'rxjs/operators';
import {PostPage} from '../model/PostPage';

@Injectable()
export class PostService extends BaseService {

  private postsUrl = BaseService.BASE_BACK_END_URL + '/api/posts';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public getPosts(): Observable<PostPage> {
    return this.http.get<PostPage>(this.postsUrl)
      .pipe(
        catchError(this.handleError('getPosts', null))
      );
  }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.postsUrl + '/' + id)
      .pipe(
        catchError(this.handleError('getPost', null))
      );
  }
}
