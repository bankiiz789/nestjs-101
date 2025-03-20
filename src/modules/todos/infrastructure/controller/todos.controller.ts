import { Controller, Get, Injectable, Post, Body } from '@nestjs/common';
import { FindAllTodoUseCase } from '../../use-case/findAllTodo.use-case';
import { FindCompletedTodosUseCase } from '../../use-case/findCompletedTodos.use-case';
import { FindUncompletedTodosUseCase } from '../../use-case/findUncompletedTodos.use-case';
import { CreateTodoUseCase } from '../../use-case/createTodo.use-case';
import { CreateTodosDto } from '../../dto/create-todos.dto';

@Injectable()
@Controller('todos')
export class TodosController {
  constructor(
    private _findAllTodoUseCase: FindAllTodoUseCase,
    private _findCompletedTodosUseCase: FindCompletedTodosUseCase,
    private _findUncompletedTodosUseCase: FindUncompletedTodosUseCase,
    private _createTodoUseCase: CreateTodoUseCase,
  ) {}
  @Get()
  findAll() {
    return this._findAllTodoUseCase.execute();
  }

  @Get('completed')
  findCompleted() {
    return this._findCompletedTodosUseCase.execute();
  }

  @Get('uncompleted')
  findUncompleted() {
    return this._findUncompletedTodosUseCase.execute();
  }

  @Post('create')
  createTodo(@Body() todo: CreateTodosDto) {
    return this._createTodoUseCase.execute(todo);
  }
}
