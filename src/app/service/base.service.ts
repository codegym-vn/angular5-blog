import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export class BaseService {

  public static BASE_BACK_END_URL = 'http://localhost:8080';

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
