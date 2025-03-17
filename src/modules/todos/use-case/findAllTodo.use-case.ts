import { Todo } from '../domain/todos.entity';
import { TodoService } from '../services/todos.service';

export class FindAllTodoUseCase {
  constructor(private _todosService: TodoService) {}

  execute(): Array<Todo> {
    return this._todosService.findSuccessTodo();
  }
}
