import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo.list',
  templateUrl: './todo.list.component.html',
  styleUrls: ['./todo.list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  constructor(public service: TodoService) {

  }

  ngOnInit() {
    this.service.getTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }

  updateTodo(todo) {
    this.service.updateTodo(todo).subscribe((res) => {
      console.log('Saved successfully');
    });
  }

  deleteTodo(id) {
    this.service.deleteTodo(id).subscribe((res) => {
      console.log('Deleted successfully');
    });
  }

}
