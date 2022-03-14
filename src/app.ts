import express from 'express';
import { router } from './routes/routes';
import { cors } from './middlewares/cors';
const app = express();

app.use(cors);

app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 80, () => {
    console.log(`Running server in port ${process.env.PORT}`)
})

export { app };
