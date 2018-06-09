import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../model/post';
import {BaseService} from './base.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PostService extends BaseService {

  private postsUrl = 'api/posts';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError('getPosts', []))
      );
  }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.postsUrl + '/' + id)
      .pipe(
        catchError(this.handleError('getPost', null))
      );
  }
}
