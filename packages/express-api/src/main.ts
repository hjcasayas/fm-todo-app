/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import morgan from 'morgan';
import * as path from 'path';

import { TodosRepository } from './todos/todos.repository';
import { InMemoryTodos } from './todos/in-memory-todos.implementation';
import { todosRouter } from './todos/todos.router';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/todos', todosRouter(new TodosRepository(new InMemoryTodos())));
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
