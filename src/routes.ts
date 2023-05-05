import { Router} from 'express';
import multer from 'multer';

import { UserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

export const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// Rotas User
router.post('/users', new UserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/userInfo',isAuthenticated, new DetailUserController().handle);

// Rotas Category
router.post('/category',isAuthenticated, new CreateCategoryController().handle);
router.get('/category',isAuthenticated, new ListCategoryController().handle );

// Rotas Produtos
router.post('/product',isAuthenticated,upload.single('file'), new CreateProductController().handle);
router.get('/category/product',isAuthenticated, new ListByCategoryController().handle);

// Order
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);