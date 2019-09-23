import { Todo } from '../todo-item/models/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;

  constructor(private todoService: TodoService) {

  }

  ngOnInit(){
    this.getTodos();
  }

  getTodos(){
    this.todoService.getTodos().subscribe(
      data => {this.todos = data; console.log(data)},
      err => console.log(err),
      () => console.log('> done loading todos')
    )
  }

}
