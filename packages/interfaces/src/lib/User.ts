import { Entity } from './Entity';
import { Todo } from './Todo';

export interface User extends Entity {
  firstName: string;
  lastName: string;
  emailAddress: string;
  todos: Todo[];
}
