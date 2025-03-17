import { Injectable } from '@nestjs/common';
import { Todo } from '../domain/todos.entity';
import { TodoService } from '../services/todos.service';


@Injectable()
export class FindAllTodoUseCase {
  constructor(private readonly _todosService: TodoService) {}

  execute(): Array<Todo> {
    return this._todosService.findAllTodos();
  }
}
