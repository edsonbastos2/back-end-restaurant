import { Request, Response} from 'express';
import { RemoveOrderService } from '../../services/order/RemoveOrderService';

export class RemoveOrderController {
  async handle(req:Request, res:Response) {
    const order_id = req.query.order_id as string;

    const removeOrder = new RemoveOrderService();

    const order = await removeOrder.execulte(order_id);

    return res.json(order);
  }
}