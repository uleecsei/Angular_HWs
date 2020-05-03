import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  change: boolean;

  constructor(public service: TodoService) {
  }

  ngOnInit(): void {
    this.service
      .fetchTodos()
      .subscribe();
  }
  onEdit(id:number){
    this.service.editTask(id);
  }
  onChange(id: number) {
    this.service.onToggle(id);
  }
  onDelete(id: number) {
    this.service.deleteTask(id);
  }
}
