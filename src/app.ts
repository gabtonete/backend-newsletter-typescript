import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

const options: cors.CorsOptions = {
    origin: ["*"],
    methods: "*"
}

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(3001, () => {
    console.log(`Server is running on 3001`)
})

export { app };
