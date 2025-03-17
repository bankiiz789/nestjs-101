import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './domain/user.entity';
import { USER_USE_CASES } from './use-case';
import { UserRepository } from './domain/user.repository';

@Module({
  // imports: [TypeOrmModule.forFeature([User])],
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...USER_USE_CASES],
  exports: [UserService],
})
export class UserModule {}
