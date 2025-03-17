import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private _userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this._userRepository.findAll();
  }

  async getUserById(id: number): Promise<User> {
    const users = this._userRepository.findById(id);

    if (!users) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return users;
  }
}
