import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = ['lhf'];

  getUsers(): string[] {
    return this.users;
  }
}
