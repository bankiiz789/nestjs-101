import { Module } from '@nestjs/common';
import { TodosController } from './infrastructure/controller/todos.controller';
import { TodoService } from './services/todos.service';
import { TodoRepository } from './domain/todos.repository';
import { TodoUseCases } from './use-case';

@Module({
  //   imports: [],
  controllers: [TodosController],
  providers: [
    TodoService,
    TodoRepository,
    ...TodoUseCases,
    { provide: 'TODO_DATA', useValue: '/src/shared/database/todos.json' },
  ],
  exports: [TodoService],
})
export class TodosModule {}
