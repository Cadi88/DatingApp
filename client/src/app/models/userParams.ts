import { User } from './user.model';

export class UserParams {
  gender: string;
  minAge = 18;
  maxAge = 99;
  pageNumber = 1;
  pageSize = 10;

  constructor(user: User) {
    this.gender = user.gender === 'female' ? 'male' : 'female';
  }
}
