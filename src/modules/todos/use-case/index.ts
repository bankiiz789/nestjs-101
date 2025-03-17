import { FindAllTodoUseCase } from './findAllTodo.use-case';
import { FindCompletedTodosUseCase } from './findCompletedTodos.use-case';
import { FindUncompletedTodosUseCase } from './findUncompletedTodos.use-case';

export const TodoUseCases = [
  FindAllTodoUseCase,
  FindCompletedTodosUseCase,
  FindUncompletedTodosUseCase,
];
