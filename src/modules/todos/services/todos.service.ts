import { Todo } from '../domain/todos.entity';
import { TodoRepository } from '../domain/todos.repository';
import { Body, Injectable } from '@nestjs/common';
import { CreateTodosDto } from '../dto/create-todos.dto';

@Injectable()
export class TodoService {
  constructor(
    private _todosRepository: TodoRepository,
    private createTodoDto: CreateTodosDto,
  ) {}

  findSuccessTodo(): Array<Todo> {
    const todos = this._todosRepository.findAll();
    return todos.filter((todo) => todo.completed);
  }

  findUncompletedTodo(): Array<Todo> {
    const todos = this._todosRepository.findAll();
    return todos.filter((todo) => !todo.completed);
  }

  // no business logic
  findAllTodos(): Array<Todo> {
    return this._todosRepository.findAll();
  }

  createTodo(@Body() todo: CreateTodosDto): CreateTodosDto {
    return todo;
  }
}
