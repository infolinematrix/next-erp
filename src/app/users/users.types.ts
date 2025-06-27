// Types for Users module

export interface Users {
  id: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type UsersType = 'type1' | 'type2';

export type UsersTypes = {
  Users: Users;
  UsersType: UsersType;
};