import express from 'express';
const router = express.Router();

import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodo,
} from '../controller/TodoController';

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.put('/toggle/:id', toggleTodo);

export { router };
