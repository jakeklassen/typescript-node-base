import { Inject, Service } from 'typedi';
import { Logger } from '../services/logger';

export interface User {
  id: number;
  username: string;
}

@Service()
export class UserController {
  users: User[] = [];

  @Inject(() => Logger)
  logger!: Logger;

  async get(id: User['id']) {
    this.logger.log(id.toString());

    return this.users.find((u) => u.id === id);
  }
}
