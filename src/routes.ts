import { Router} from 'express';
import { UserController } from './controllers/CreateUserController';
import { AuthUserController } from './controllers/AuthUserController';
import { DetailUserController } from './controllers/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

export const router = Router();

router.post('/users', new UserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/userInfo',isAuthenticated, new DetailUserController().handle);