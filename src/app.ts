require('dotenv').config({
    path: resolve(__dirname, '..', '.env')
});
import express from 'express';
import { router } from './routes/routes';
import { resolve } from 'path';

const app = express();

app.use(express.json());

app.use(router);

export { app };
