import { User } from '../domain/user.entity';
import { UserService } from '../services/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private _userService: UserService) {}

  async execute(id: number): Promise<User | null> {
    return this._userService.getUserById(id);
  }
}
