import { Injectable } from '@angular/core';
import { Todo } from '../todo-item/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Todo[]{
    return [
      new Todo(1, "Walk the Dog", "2019-09-24", false),
      new Todo(2, "Read any book for at least 40 minutes", "2019-09-23", true),
      new Todo(3, "Study Angular", "2019-09-26", false),
      new Todo(4, "Study Vue.JS", "2019-09-23", true),
      new Todo(5, "Study Chinese", "2019-09-27", true)
    ]
  }
}
