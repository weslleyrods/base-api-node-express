import { Router } from 'express';
import { helloWorld } from '../controllers/helloworld.controller';
import { auth } from '../middlewares/auth'

const route = Router();

route.get('/', auth, helloWorld);

export default route;