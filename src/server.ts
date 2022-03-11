import { app } from './app';
import { resolve } from 'path';

require('dotenv').config({
    path: resolve(__dirname, '..', '.env')
});


const { PORT }  = process.env;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})