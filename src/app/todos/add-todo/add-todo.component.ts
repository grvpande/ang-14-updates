import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {}

  onAddTodo() {
    if (this.addForm.valid) {
        this.todoService.addTodo({title: <string>this.addForm.value.title, completed: false })
    }
  }
}
