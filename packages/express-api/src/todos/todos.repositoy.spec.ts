import { Todo } from '@fm-todo-app/interfaces';
import { ITodosRepository } from './todos.repo-interface';
import { TodosRepository } from './todos.repository';

describe('Todos Repository', () => {
  test('add Method', () => {
    let addCalledCount = 0;
    class TestTodostRepositoryImplementation implements ITodosRepository {
      private todos: Todo[] = [];

      add = async (todo: Todo): Promise<string> => {
        expect(todo.content).toBe('Test Content');
        addCalledCount++;
        return '1';
      };
      get: (id: string, userId: string) => Promise<Todo>;
      getAll: () => Promise<Todo[]>;
      update: (todo: Todo) => Promise<string>;
      delete: (id: string) => Promise<void>;
    }

    const testTodosRepositoryImplementation =
      new TestTodostRepositoryImplementation();
    const todosRepository = new TodosRepository(
      testTodosRepositoryImplementation
    );

    todosRepository.add({ content: 'Test Content' });
    expect(addCalledCount).toBe(1);
    todosRepository.add({ content: 'Test Content' });
    expect(addCalledCount).toBe(2);
  });

  test('getAll Method', () => {
    let getCalledCount = 0;
    class TestTodostRepositoryImplementation implements ITodosRepository {
      add: (todo: Todo) => Promise<string>;
      get = async (id: string, userId: string): Promise<Todo> => {
        expect(id).toBe('1');
        expect(userId).toBe('1');
        getCalledCount++;
        return { content: 'Test Content' };
      };
      getAll: () => Promise<Todo[]>;
      update: (todo: Todo) => Promise<string>;
      delete: (id: string) => Promise<void>;
    }

    const testTodosRepositoryImplementation =
      new TestTodostRepositoryImplementation();
    const todosRepository = new TodosRepository(
      testTodosRepositoryImplementation
    );

    todosRepository.get('1', '1');
    expect(getCalledCount).toBe(1);
    todosRepository.get('1', '1');
    expect(getCalledCount).toBe(2);
  });

  test('get Method', () => {
    let getAllCalledCount = 0;
    class TestTodostRepositoryImplementation implements ITodosRepository {
      add: (todo: Todo) => Promise<string>;
      get: (id: string, userId: string) => Promise<Todo>;
      getAll = async (): Promise<Todo[]> => {
        getAllCalledCount++;
        return [];
      };
      update: (todo: Todo) => Promise<string>;
      delete: (id: string) => Promise<void>;
    }

    const testTodosRepositoryImplementation =
      new TestTodostRepositoryImplementation();
    const todosRepository = new TodosRepository(
      testTodosRepositoryImplementation
    );

    todosRepository.getAll();
    expect(getAllCalledCount).toBe(1);
    todosRepository.getAll();
    expect(getAllCalledCount).toBe(2);
  });

  test('update Method', () => {
    let updateCalledCount = 0;
    class TestTodostRepositoryImplementation implements ITodosRepository {
      add: (todo: Todo) => Promise<string>;
      get: (id: string, userId: string) => Promise<Todo>;
      getAll: () => Promise<Todo[]>;
      update = async (todo: Todo): Promise<string> => {
        updateCalledCount++;
        expect(todo.content).toBe('Test Content');
        return '';
      };
      delete: (id: string) => Promise<void>;
    }

    const testTodosRepositoryImplementation =
      new TestTodostRepositoryImplementation();
    const todosRepository = new TodosRepository(
      testTodosRepositoryImplementation
    );

    todosRepository.update({ id: '1', content: 'Test Content' });
    expect(updateCalledCount).toBe(1);
    todosRepository.update({ id: '1', content: 'Test Content' });
    expect(updateCalledCount).toBe(2);
  });

  test('delete Method', () => {
    let deleteCalledCount = 0;
    class TestTodostRepositoryImplementation implements ITodosRepository {
      add: (todo: Todo) => Promise<string>;
      get: (id: string, userId: string) => Promise<Todo>;
      getAll: () => Promise<Todo[]>;
      update: (todo: Todo) => Promise<string>;
      delete = (id: string): Promise<void> => {
        expect(id).toBe('1');
        deleteCalledCount++;
        return;
      };
    }

    const testTodosRepositoryImplementation =
      new TestTodostRepositoryImplementation();
    const todosRepository = new TodosRepository(
      testTodosRepositoryImplementation
    );

    todosRepository.delete('1');
    expect(deleteCalledCount).toBe(1);
    todosRepository.delete('1');
    expect(deleteCalledCount).toBe(2);
  });
});
