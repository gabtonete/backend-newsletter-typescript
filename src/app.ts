import express from 'express';
import { sequelize } from './helpers/SqliteDBHelper';
import { router } from './routes/routes';

const app = express();

app.use(express.json());

app.use(router);

export { app };
