import { Router } from 'express';
import { helloWorld } from '../controllers/helloworld.controller';

const route = Router();

route.get('/', helloWorld);

export default route;