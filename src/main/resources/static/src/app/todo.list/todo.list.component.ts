import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Todo} from '../model/todo';
import 'rxjs/add/observable/of';
import {MatTable} from "@angular/material";

@Component({
  selector: 'app-todo.list',
  templateUrl: './todo.list.component.html',
  styleUrls: ['./todo.list.component.css']
})
export class TodoListComponent implements AfterViewInit {

  todos: Todo[];
  displayedColumns = ['label', 'completed', 'delete'];
  label:string;
  @ViewChild('table') table: MatTable<Object>;
  constructor(public service: TodoService) {
  }

  refreshData(){
    this.service.getTodos().subscribe((res: Todo[]) => {
      this.todos = res;
      this.label=null;
      this.table.renderRows();
    });
  }

  ngAfterViewInit(): void {
    this.refreshData();
  }

  updateTodo(todo:Todo) {
    this.service.updateTodo({id:todo.id,label:todo.label,completed:!todo.completed}).subscribe((res) => {
    });
  }

  deleteTodo(id) {
    this.service.deleteTodo(id).subscribe((res) => {
      this.refreshData();
    });
  }

  createTodo(){
    if(this.label){
      let todo=<Todo>{label:this.label,completed:false};
      this.service.createTodo(todo).subscribe(res=>{
        this.refreshData();
      })
    }
  }

}
