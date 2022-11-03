import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoItemComponent, AddTodoComponent, TodoListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddTodoComponent, TodoListComponent],
  providers: [TodoService],
})
export class TodoModule {}
