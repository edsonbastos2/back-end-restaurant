import { Request, Response} from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const categoryService = new CreateCategoryService();
    const category = await categoryService.execulte(name);
    return res.json(category);
  }
}