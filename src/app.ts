
import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

const options : cors.CorsOptions = {
    origin: ["*"],
    optionsSuccessStatus: 200
};

app.use(cors(options));

app.use(express.json());

app.use(router);

const { PORT }  = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

export { app };
