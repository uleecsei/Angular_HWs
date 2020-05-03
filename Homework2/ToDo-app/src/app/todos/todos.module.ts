import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosComponent } from './todos.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../shared/search.pipe';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { PopupComponent } from './popup/popup.component';




@NgModule({
  declarations: [TodosComponent, TodoFormComponent, SearchPipe, SearchComponent, PopupComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule, FormsModule],
  exports: [TodosComponent, TodoFormComponent, SearchComponent]
})
export class TodosModule {}
