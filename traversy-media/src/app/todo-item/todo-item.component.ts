import { Todo } from './models/Todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;


  constructor() {
  }

  ngOnInit(){

  }

  toggleTodo(todo: Todo){
    return this.todo.completed = !this.todo.completed;
  }

}
