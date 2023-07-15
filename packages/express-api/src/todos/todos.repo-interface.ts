import { Todo } from '@fm-todo-app/interfaces';

export interface ITodosRepository {
  add: (todo: Todo) => Promise<string>;
  get: (id: string, userId: string) => Promise<Todo>;
  getAll: () => Promise<Todo[]>;
  update: (todo: Todo) => Promise<string>;
  delete: (id: string) => Promise<void>;
}
