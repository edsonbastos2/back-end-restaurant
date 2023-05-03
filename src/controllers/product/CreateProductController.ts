import { Request, Response} from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

export class CreateProductController {
  async handle(req:Request, res:Response) {
    const { name, price, description, category_id } = req.body;

    const createProductService = new CreateProductService();

    if(!req.file) {
      throw new Error('Error upload file');
    }else {

      const { filename: banner } = req.file;

      const product = await createProductService.execulte({name, price, description, banner, category_id});
      return res.json(product);
    }

  }
}