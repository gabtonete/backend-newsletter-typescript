import cors from 'cors';
import { Router } from "express";
import { createUserController } from "../useCases/CreateUser/index";

const router = Router();
const options: cors.CorsOptions = ({
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false
})

router.use(cors(options));

router.post('/api/users', (request, response) => {
  return createUserController.handle(request, response);
  //return response.status(200).json({name: "it works"});
});

router.options('*', cors(options));

export { router };