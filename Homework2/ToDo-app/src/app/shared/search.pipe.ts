import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from './todo-tasks';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(tasks: Tasks[], request: string = ''): Tasks[] {
    if (!request.trim()) {
      return tasks;
    }

    return tasks.filter(
      (item) =>
        item.title
          .trim()
          .toLowerCase()
          .indexOf(request.trim().toLowerCase()) !== -1
    );
  }
}
