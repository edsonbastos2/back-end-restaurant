import { Router} from 'express';
import { UserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { isAuthenticated } from './middlewares/isAuthenticated';

export const router = Router();

// Rotas User
router.post('/users', new UserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/userInfo',isAuthenticated, new DetailUserController().handle);

// Rotas Category
router.post('/category',isAuthenticated, new CreateCategoryController().handle);
router.get('/category',isAuthenticated, new ListCategoryController().handle );

// Rotas Produtos
router.post('/product',isAuthenticated, new CreateProductController().handle);