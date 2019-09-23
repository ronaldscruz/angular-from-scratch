import { Todo } from '../todo-item/models/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(){
    this.todos = this.todoService.getTodos();
  }

}
