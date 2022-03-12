
import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

const options : cors.CorsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(options));

app.use(express.json());

app.use(router);

app.listen(5000, () => {
    console.log("Listening on port 5000")
})

export { app };
