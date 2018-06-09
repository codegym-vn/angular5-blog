import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {BaseService} from './base.service';
import {Post} from '../model/post';

@Injectable()
export class CategoryService extends BaseService {

  private categoriesUrl = 'api/categories';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError('getCategories', []))
      );
  }

  public getPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.categoriesUrl + '/' + id + '/posts')
      .pipe(
        catchError(this.handleError('getPosts', []))
      );
  }
}
