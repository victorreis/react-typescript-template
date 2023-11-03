import { UserType } from '../../Models/User.types';

export interface UserCreatorService {
  /**
   * Create a User.
   *
   * @param user UserType
   * @returns UserType
   *
   * @throws when ???
   */
  create: (user: UserType) => UserType;
}
