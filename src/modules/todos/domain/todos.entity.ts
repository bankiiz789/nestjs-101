export class Todo {
  constructor(
    public id: number,
    public email: string,
    public username: string,
    public firstName: string,
    public completed: boolean,
    public lastName: string,
    public createdAt: string,
    public updatedAt: string,
  ) {}
}
