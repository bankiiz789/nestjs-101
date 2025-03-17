import { Todo } from 'src/modules/todos/domain/todos.entity';

export class TodoData {
  public todos: Todo[] = [
    {
      id: 1,
      email: 'john.doe@example.com',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      completed: false,
      createdAt: '2023-01-15T08:30:00.000Z',
      updatedAt: '2023-03-22T14:15:30.000Z',
    },
    {
      id: 2,
      email: 'jane.smith@example.com',
      username: 'janesmith',
      firstName: 'Jane',
      lastName: 'Smith',
      completed: true,
      createdAt: '2023-02-10T10:45:00.000Z',
      updatedAt: '2023-04-05T09:20:15.000Z',
    },
    {
      id: 3,
      email: 'robert.johnson@example.com',
      username: 'robjohnson',
      firstName: 'Robert',
      lastName: 'Johnson',
      completed: false,
      createdAt: '2023-02-28T15:20:00.000Z',
      updatedAt: '2023-03-15T11:30:45.000Z',
    },
    {
      id: 4,
      email: 'emily.wilson@example.com',
      username: 'emilyw',
      firstName: 'Emily',
      lastName: 'Wilson',
      completed: true,
      createdAt: '2023-03-12T09:15:00.000Z',
      updatedAt: '2023-04-18T16:40:20.000Z',
    },
    {
      id: 5,
      email: 'michael.brown@example.com',
      username: 'mikebrown',
      firstName: 'Michael',
      lastName: 'Brown',
      completed: false,
      createdAt: '2023-03-25T13:50:00.000Z',
      updatedAt: '2023-04-10T08:25:10.000Z',
    },
    {
      id: 6,
      email: 'sarah.davis@example.com',
      username: 'sarahdavis',
      firstName: 'Sarah',
      lastName: 'Davis',
      completed: false,
      createdAt: '2023-04-05T11:30:00.000Z',
      updatedAt: '2023-04-20T14:55:30.000Z',
    },
    {
      id: 7,
      email: 'david.miller@example.com',
      username: 'davemiller',
      firstName: 'David',
      lastName: 'Miller',
      completed: false,
      createdAt: '2023-04-15T10:20:00.000Z',
      updatedAt: '2023-05-01T09:10:45.000Z',
    },
    {
      id: 8,
      email: 'lisa.taylor@example.com',
      username: 'lisataylor',
      firstName: 'Lisa',
      lastName: 'Taylor',
      completed: true,
      createdAt: '2023-04-22T14:40:00.000Z',
      updatedAt: '2023-05-10T15:35:20.000Z',
    },
    {
      id: 9,
      email: 'james.anderson@example.com',
      username: 'jamesand',
      firstName: 'James',
      lastName: 'Anderson',
      completed: false,
      createdAt: '2023-05-01T08:15:00.000Z',
      updatedAt: '2023-05-15T10:45:30.000Z',
    },
    {
      id: 10,
      email: 'jennifer.thomas@example.com',
      username: 'jennyt',
      firstName: 'Jennifer',
      lastName: 'Thomas',
      completed: true,
      createdAt: '2023-05-10T16:30:00.000Z',
      updatedAt: '2023-05-20T13:25:15.000Z',
    },
  ];
}
