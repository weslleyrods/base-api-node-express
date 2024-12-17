import { Router } from 'express';
import { helloWorld } from '../controllers/helloworld.controller';
import { login } from '../controllers/login.controller';
import { auth } from '../middlewares/auth'

const route = Router();

route.get('/', auth, helloWorld);

route.post('/login', login)

export default route;