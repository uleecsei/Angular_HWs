import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title = '';

  constructor(public service: TodoService) {}

  ngOnInit(): void {}
  addNew() {
    this.service.addTask(this.title);
    this.title = '';
  }
}
