import { Entity } from './Entity';
import { User } from './User';

export interface Todo extends Entity {
  content: string;
}
