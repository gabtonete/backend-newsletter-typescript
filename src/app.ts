import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

const allowedOrigins = ['*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: "*",
  "optionsSuccessStatus": 200
};

app.use(cors(options));

app.use(express.json());

app.use(router);

export { app };
