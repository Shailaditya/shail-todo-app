import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/toPromise';
import {Todo} from '../model/todo';

@Injectable()
export class TodoService {
  private baseUrl = '/api/v1/todo';

  constructor(private http: HttpClient) {
  }

  static handleError(error: HttpErrorResponse) {
    console.error('SERVICE ERROR:::', error);
    return Observable.throw(error || 'Server error');
  }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<any>(this.baseUrl)
      .catch((error: HttpErrorResponse) => TodoService.handleError(error));
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo)
      .catch((error: HttpErrorResponse) => TodoService.handleError(error));
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseUrl + '/' + todo.id, todo)
      .catch((error: HttpErrorResponse) => TodoService.handleError(error));
  }

  public deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id)
      .catch((error: HttpErrorResponse) => TodoService.handleError(error));
  }
}
