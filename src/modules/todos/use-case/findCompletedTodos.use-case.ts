import { Injectable } from '@nestjs/common';
import { Todo } from '../domain/todos.entity';
import { TodoService } from '../services/todos.service';

@Injectable()
export class FindCompletedTodosUseCase {
  constructor(private _todosService: TodoService) {}

  execute(): Array<Todo> {
    return this._todosService.findSuccessTodo();
  }
}
