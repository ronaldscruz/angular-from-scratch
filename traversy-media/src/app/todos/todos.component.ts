import { Todo } from '../todo-item/models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      new Todo(1, "Walk the Dog"),
      new Todo(2, "Read 'Rich Dad Poor Dad'"),
      new Todo(3, "Workout for at least 30 minutes", "2019-09-18",true)
    ]
  }

}
