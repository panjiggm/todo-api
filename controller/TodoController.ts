import { Request, Response } from 'express';
import prisma from '../utils/client';

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();

    res.json(todos);
  } catch (error: any) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;

    const newTodo = await prisma.todo.create({
      data: {
        title,
        completed,
      },
    });

    res.json(newTodo);
  } catch (error: any) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;
    const { id } = req.params;

    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        completed,
      },
    });

    res.json(todo);
  } catch (error: any) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });

    res.json(todo);
  } catch (error: any) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export const toggleTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const todo = await prisma.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      res.status(404).json({ message: 'Todo not Found!' });
    }

    const newTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        completed: !todo?.completed,
      },
    });

    res.json(newTodo);
  } catch (error: any) {
    console.log(error.message);

    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
