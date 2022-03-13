import express from 'express';
import { router } from './routes/routes';
import { corsmiddleware } from './middlewares/corsmiddleware';
import cors from 'cors';

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    app.use(cors())
    next();
});

app.use(router);

app.use(express.json());

app.listen(5000, () => {
    console.log("Listening on port 5000")
})

export { app };
