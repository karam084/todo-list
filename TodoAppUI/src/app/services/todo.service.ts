import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  updateTodo(id: string, todo: Todo) {
    throw new Error('Method not implemented.');
  }
  addNewTodoItem(newTodo: Todo) {
    throw new Error('Method not implemented.');
  }
  baseApiUrl: string= 'http://localhost:5175';



  constructor(private http: HttpClient) { }
  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/todo');
  }

  addTodoItem(newTodo: Todo): Observable<Todo>{
    newTodo.id= "00000000-0000-0000-0000-000000000000";
    return this.http.post<Todo>(this.baseApiUrl + '/api/todo', newTodo);
  }

  updateTodoItem(id:string, todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.baseApiUrl + '/api/todo'+ id, todo);
  }

}
