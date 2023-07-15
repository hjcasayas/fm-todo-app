import { Entity } from './Entity';
import { User } from './User';

export interface Todo extends Entity {
  content: string;
  createdDate: Date;
  updatedDate: Date;
  createdBy: User;
  updatedBy: User;
}
