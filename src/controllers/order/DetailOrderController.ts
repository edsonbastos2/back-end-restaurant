import { Request, Response} from 'express';
import { DetailOrderService } from '../../services/order/DetailOrderService';

export class DetailOrderController {
  async handle(req:Request, res:Response) {
    const order_id = req.query.order_id as string;
    const detailOrder = new DetailOrderService();
    const order = await detailOrder.execulte(order_id);

    return res.json(order);
  }
}