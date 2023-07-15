import { Request, Response, Router } from 'express';
import { ITodosRepository } from './todos.repo-interface';

export const todosRouter = (todosRepository: ITodosRepository) => {
  const todosRouter = Router();

  todosRouter.get('', async (req: Request, res: Response) => {
    const data = await todosRepository.getAll();
    return res.status(200).json({ success: true, data });
  });

  return todosRouter;
};
