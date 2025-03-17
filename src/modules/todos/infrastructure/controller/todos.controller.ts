import { Controller, Get, Injectable } from '@nestjs/common';
import { FindAllTodoUseCase } from '../../use-case/findAllTodo.use-case';
import { FindCompletedTodosUseCase } from '../../use-case/findCompletedTodos.use-case';
import { FindUncompletedTodosUseCase } from '../../use-case/findUncompletedTodos.use-case';

@Injectable()
@Controller('todos')
export class TodosController {
  constructor(
    private _findAllTodoUseCase: FindAllTodoUseCase,
    private _findCompletedTodosUseCase: FindCompletedTodosUseCase,
    private _findUncompletedTodosUseCase: FindUncompletedTodosUseCase,
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
}
