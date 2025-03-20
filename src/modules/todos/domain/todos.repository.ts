import { Todo } from './todos.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoRepository {
  constructor(private _todos: Todo[]) {}

  findAll(): Todo[] {
    return this._todos;
  }
}
