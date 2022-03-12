
import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

const options : cors.CorsOptions = {
    origin: ["http://frontend-newsletter-nextjs.vercel.app", "http://localhost:3000"],
    methods: ['POST'],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(options));

app.use(express.json());

app.use(router);

const { PORT }  = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

export { app };
