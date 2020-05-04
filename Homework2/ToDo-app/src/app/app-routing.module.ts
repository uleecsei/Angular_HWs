import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodosComponent
  },
  {
    path: 'cd',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
