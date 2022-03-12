import { app } from './app';
import { resolve } from 'path';
import cors from 'cors';

require('dotenv').config({
    path: resolve(__dirname, '..', '.env')
});

app.use(cors({
    origin: ['*'],
    methods: ['*'],
    optionsSuccessStatus: 200
}))

const { PORT }  = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})