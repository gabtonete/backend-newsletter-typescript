require('dotenv').config({
    path: resolve(__dirname, '..', '.env')
});
import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';
import { resolve } from 'path';

const app = express();

const options: cors.CorsOptions = {
  methods: "OPTIONS, POST",
  origin: "https://frontend-newsletter-nextjs.vercel.app/",
  optionsSuccessStatus: 200
};

app.use(cors())

app.use(express.json());

app.use(router);



const { PORT }  = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

export { app };
