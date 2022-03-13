
import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();

app.use(router);

app.use(express.json());

app.listen(5000, () => {
    console.log("Listening on port 5000")
})

export { app };
