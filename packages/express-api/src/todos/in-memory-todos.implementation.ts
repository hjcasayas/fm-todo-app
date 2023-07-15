import { Todo } from '@fm-todo-app/interfaces';
import { ITodosRepository } from './todos.repo-interface';

export class InMemoryTodos implements ITodosRepository {
  private todos: Todo[] = [
    {
      id: '1',
      content: 'Ligo baby',
      createdBy: '1',
      updatedBy: '1',
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    {
      id: '2',
      content: 'Ligo self',
      createdBy: '1',
      updatedBy: '1',
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    {
      id: '3',
      content: 'Breakfast',
      createdBy: '1',
      updatedBy: '1',
      createdDate: new Date(),
      updatedDate: new Date(),
    },
    {
      id: '4',
      content: 'Hatod wife',
      createdBy: '1',
      updatedBy: '1',
      createdDate: new Date(),
      updatedDate: new Date(),
    },
  ];
  add = async (todo: Todo): Promise<string> => {
    const id = this.todos.length.toString();
    this.todos.push({ id, ...todo });
    return id;
  };

  get = async (id: string, userId: string) => {
    return this.todos.find((t) => t.id === id && userId === t.createdBy);
  };

  getAll = async () => {
    return this.todos;
  };

  update = async (todo: Todo) => {
    return todo.id;
  };

  delete = async (id: string) => {
    this.todos = this.todos.filter((t) => t.id != id);
    return;
  };
}
