import { Request, Response} from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService';

export class CreateOrderController {
  async handle(req:Request, res:Response) {
    const {table, name} = req.body;

    const orderController = new CreateOrderService();

    const order = await orderController.execulte({table, name});

    return res.json(order);
  }
}