import { Injectable } from '@angular/core';
import { Todo } from '../todo-item/models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = "http://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get(this.baseUrl);
  }

  // getTodos(): Todo[]{
  //   return [
  //     new Todo(1, "Walk the Dog", "2019-09-24", false),
  //     new Todo(2, "Read any book for at least 40 minutes", "2019-09-23", true),
  //     new Todo(3, "Study Angular", "2019-09-26", false),
  //     new Todo(4, "Study Vue.JS", "2019-09-23", true),
  //     new Todo(5, "Study Chinese", "2019-09-27", true)
  //   ]
  // }

}
