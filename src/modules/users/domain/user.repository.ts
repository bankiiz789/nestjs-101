import { User } from './user.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

// this folder will hit database
@Injectable()
export class UserRepository {
  // constructor(
  //   @InjectRepository(User)
  //   private readonly userRepository: Repository<User>,
  // ) {}

  // Mock data for testing
  private users: User[] = [
    new User(1, 'john@example.com', 'john'),
    new User(2, 'jane@example.com', 'jane'),
    new User(3, 'bob@example.com', 'bob'),
  ];

  async findAll(): Promise<Array<User>> {
    // return this.userRepository.find();
    return Promise.resolve(this.users);
  }

  async findById(id: number): Promise<User> {
    // return this.userRepository.findOne({ where: { id } });
    const user = this.users.find((user) => user.id === id);
    return Promise.resolve(user);
  }

  async save(user: User): Promise<User> {
    // return this.userRepository.save(user);
    const existingIndex = this.users.findIndex((u) => u.id === user.id);
    if (existingIndex >= 0) {
      this.users[existingIndex] = user;
    } else {
      // Assign a new ID if not provided
      if (!user.id) {
        user.id =
          this.users.length > 0
            ? Math.max(...this.users.map((u) => u.id)) + 1
            : 1;
      }
      this.users.push(user);
    }
    return Promise.resolve(user);
  }
}
