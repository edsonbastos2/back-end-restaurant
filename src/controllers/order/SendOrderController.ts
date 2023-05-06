import { Request, Response} from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

export class SendOrderController {
  async handle(req:Request, res:Response) {
    const { order_id } = req.body;

    const orderService = new SendOrderService();
    const order = await orderService.execulte(order_id);

    return res.json(order);

  }
}