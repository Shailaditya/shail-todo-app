import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo.list/todo.list.component';
import {TodoRoutingModule} from './todo-routing/todo-routing.module';
import {TodoService} from './service/todo.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule,MatFormFieldModule,MatInputModule,MatTableModule,MatToolbarModule,MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatTableModule,MatFormFieldModule,MatInputModule,MatIconModule,
    TodoRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
