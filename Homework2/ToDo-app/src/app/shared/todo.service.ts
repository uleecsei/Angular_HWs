import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Tasks } from './todo-tasks';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../todos/popup/popup.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: Tasks[] = [];
  doneTasks: Tasks[] = [];
  todoTasks: Tasks[] = [];

  searchString = '';

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  fetchTodos(): Observable<Tasks[]> {
    return this.http
      .get<Tasks[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .pipe(
        tap((tasks) => (this.tasks = tasks)),
        tap(
          (tasks) => (this.doneTasks = tasks.filter((task) => task.completed))
        ),
        tap(
          (tasks) => (this.todoTasks = tasks.filter((task) => !task.completed))
        )
      );
  }
  addTask(title: string) {
    let maxId = this.tasks.reduce((acc, cur): number => {
      acc = Math.max(acc, cur.id);
      return acc;
    }, -1);
    const newTask: Tasks = {
      userId: 1,
      id: ++maxId,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    this.doneCheck();
  }
  editTask(id: number) {
    const title = '';
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '200px',
      width: '400px',
      data: { title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tasks.map((task) => {
          if (task.id == id) {
            task.title = result;
          }
        });
      }
    });
    this.doneCheck();
  }
  onToggle(id: number) {
    const index = this.tasks.findIndex((item) => item.id === id);
    this.tasks[index].completed = !this.tasks[index].completed;
    this.doneCheck();
  }
  doneCheck() {
    this.doneTasks = this.tasks.filter((task) => task.completed);
    this.todoTasks = this.tasks.filter((task) => !task.completed);
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    this.doneCheck();
  }
}
