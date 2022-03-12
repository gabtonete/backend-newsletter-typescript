import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

const options: cors.CorsOptions = {
  methods: "OPTIONS, POST",
  origin: "https://frontend-newsletter-nextjs.vercel.app/",
  optionsSuccessStatus: 200
};

app.use((req, resp, next) => {
  next()
}, cors({ maxAge: 84600 }))

app.use(express.json());

app.use(router);

export { app };
