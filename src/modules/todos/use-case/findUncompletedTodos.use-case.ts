import { Injectable } from '@nestjs/common';
import { Todo } from '../domain/todos.entity';
import { TodoService } from '../services/todos.service';

@Injectable()
export class FindUncompletedTodosUseCase {
  constructor(private _todosService: TodoService) {}

  execute(): Array<Todo> {
    return this._todosService.findUncompletedTodo();
  }
}
