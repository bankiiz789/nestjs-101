import { User } from '../domain/user.entity';
import { UserService } from '../services/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUserUseCase {
  constructor(private _userService: UserService) {}

  async execute(): Promise<User[]> {
    return this._userService.getAllUsers();
  }
}
