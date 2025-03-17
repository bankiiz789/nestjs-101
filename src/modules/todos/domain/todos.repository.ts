import { Todo } from './todos.entity';
import { Injectable } from '@nestjs/common';
import { todosMockData } from 'src/shared/database/todos';

@Injectable()
export class TodoRepository {
  // constructor(private _todos: Todo[]) {}

  findAll(): Todo[] {
    const todos = todosMockData;
    return todos;
  }
}
