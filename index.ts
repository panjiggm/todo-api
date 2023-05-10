import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router as routerTodo } from './routes/todo';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/todos', routerTodo);

app.listen(port, () => {
  console.log(
    `[server]: Server is running at http://localhost:${port}`
  );
});
