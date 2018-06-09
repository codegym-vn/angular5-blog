import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export class BaseService {

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
