import { Todo } from '../domain/todos.entity';
import { TodoRepository } from '../domain/todos.repository';

export class TodoService {
  constructor(private _todosRepository: TodoRepository) {}

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
    return this.findAllTodos();
  }
}
