import { nanoid } from 'nanoid';

import { UserType } from '../../Models/User.types';
import { UserCreatorService } from './UserCreator.service.type';

const create = ({ name, nickname, url, thumbnailUrl }: UserType): UserType => {
  const newUser: UserType = {
    id: nanoid(),
    name,
    nickname,
    url,
    thumbnailUrl,
    createdAt: new Date(),
  };

  return newUser;
};

export const userCreatorService: UserCreatorService = {
  create,
};
