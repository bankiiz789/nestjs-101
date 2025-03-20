import { Injectable } from '@nestjs/common';
import { TodoService } from '../services/todos.service';
import { CreateTodosDto } from '../dto/create-todos.dto';

@Injectable()
export class CreateTodoUseCase {
  constructor(private readonly _todoService: TodoService) {}

  execute(todo: CreateTodosDto): CreateTodosDto {
    return this._todoService.createTodo(todo);
  }
}
