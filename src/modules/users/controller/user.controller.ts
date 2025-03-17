import { Controller, Get, Param } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { FindAllUserUseCase } from '../use-case';
import { FindUserByIdUseCase } from '../use-case';

@Controller('users')
export class UserController {
  constructor(
    private readonly _findAllUser: FindAllUserUseCase,
    private readonly _findUserById: FindUserByIdUseCase,
  ) {}

  @Get()
  findAllUser(): Promise<User[]> {
    return this._findAllUser.execute();
  }

  @Get(':id')
  findUserById(@Param('id') id: number): Promise<User> {
    return this._findUserById.execute(+id);
  }
}
