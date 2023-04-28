import { Router} from 'express';
import { UserController } from './controllers/CreateUserController';
import { AuthUserController } from './controllers/AuthUserController';

export const router = Router();

router.post('/users', new UserController().handle);
router.post('/login', new AuthUserController().handle);