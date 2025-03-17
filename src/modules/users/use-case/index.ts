import { FindAllUserUseCase } from './findAllUser.use-case';
import { FindUserByIdUseCase } from './findUserById.use-case';

export * from './findAllUser.use-case';
export * from './findUserById.use-case';

export const USER_USE_CASES = [
  FindAllUserUseCase,
  FindUserByIdUseCase,
  // Add future use cases here
];
