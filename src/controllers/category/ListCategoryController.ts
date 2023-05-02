import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

export class ListCategoryController {
  async handle(req: Request, res:Response) {
    const listCategoryService = new ListCategoryService();
    const category = await listCategoryService.execulte();

    return res.json(category);
  }
}