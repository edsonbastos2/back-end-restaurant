import { Router} from 'express';
import { UserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { isAuthenticated } from './middlewares/isAuthenticated';

export const router = Router();

router.post('/users', new UserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/userInfo',isAuthenticated, new DetailUserController().handle);
router.post('/category',isAuthenticated, new CreateCategoryController().handle);