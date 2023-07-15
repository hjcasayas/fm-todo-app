import { Todo } from '@fm-todo-app/interfaces';
import { ITodosRepository } from './todos.repo-interface';

export class TodosRepository implements ITodosRepository {
  constructor(private implementation: ITodosRepository) {}

  add = async (todo: Todo) => await this.implementation.add(todo);
  get = async (id: string, userId: string) =>
    await this.implementation.get(id, userId);
  getAll = async () => await this.implementation.getAll();
  update = async (todo: Todo) => await this.implementation.update(todo);
  delete = async (id: string) => await this.implementation.delete(id);
}
